import { BottomSheet, SheetHeader } from "@biotic-ui/bottom-sheet";
import getFilterHandler from '@/services/filters';
import styled from "styled-components";
import FilterCheck from '@/components/filters/FilterCheck'
import FilterSlider from '@/components/filters/FilterSlider';
import FilterSearch from '@/components/filters/FilterSearch';
import FilterOptionButton from '@/components/filters/FilterOptionButton';
import { useCallback } from 'react';
import FilterTime from '@/components/filters/FilterTime';

const filterComponents = {
    check: FilterCheck,
    range: FilterSlider,
    search: FilterSearch,
    'option-button': FilterOptionButton,
    time: FilterTime,
}

function DrawerFilterHotel(props) {

    const { filters, title, dispatch, values, forCom, open, toggle } = props;
    const handleValueChange = useCallback(
        ({ filter, value }) => {
            const handler = getFilterHandler(filter);
            if (handler) {
                dispatch({
                    type: "SET_FILTER_VALUE",
                    filter: filter.slug,
                    value: handler.isDefaultValue(filter, value) ? undefined : handler.serialize(value),
                });
            }
        },
        [dispatch]
    );

    const handleReset = () => {
        dispatch({ type: 'RESET_FILTER' })
    }

    const filterList = filters.map((item, index) => {
        let filterView;
        let borderView;
        let { value } = item
        const handler = getFilterHandler(item);
        if (handler && item.slug in values) {
            value = handler.deserialize(values[item.slug]) || handler.getDefaultValue(item)
        }
        const FilterComponent = filterComponents[item.type];

        if (index !== filters.length - 1) {
            borderView = <div style={{ borderBottom: '6px solid white' }}></div>
        }

        if (FilterComponent) {
            filterView = <>
                <div className="card-body d-flex flex-column justify-content-center py-3 px-3">
                    {(item.slug.includes('recomendedOnly') && forCom === 'hotel') &&
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className='font-weight-bold'>{title}</h6>
                            <h6 className='font-weight-bold' onClick={handleReset} style={{ cursor: 'pointer' }}>
                                Reset
                            </h6>
                        </div>
                    }
                    <FilterComponent key={item.slug} data={item} value={value} onChangeValue={handleValueChange} />
                </div>
                {borderView}
            </>
        }
        return filterView;
    })

    return (
        <RootStyled open={open} onClose={()=>toggle('filter')}>
            <SheetHeader className="d-flex justify-content-between px-3 mb-3 align-items-center">
                <div className="d-flex align-items-center">
                    <h6 className="mr-3" onClick={()=>toggle('filter')}>
                        <i className="fas fa-times" />
                    </h6>
                    <h6 className="font-weight-bold w-100">Filter</h6>
                </div>
                <h6 className="font-weight-bold" onClick={()=>toggle('filter')}>
                    Apply
                </h6>
            </SheetHeader>
            {filterList}
        </RootStyled>
    );
}


const RootStyled = styled(BottomSheet)`
    max-height:100%;
    min-height:100%;
    border-radius:0;
    padding:10px;
    background:rgb(93,156,209);
    color:white;

`

export default DrawerFilterHotel;