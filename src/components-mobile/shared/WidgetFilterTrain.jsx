import { Modal, ModalBody, ModalHeader } from "reactstrap";
import FilterCheck from '@/components/filters/FilterCheck'
import FilterSlider from '@/components/filters/FilterSlider';
import FilterSearch from '@/components/filters/FilterSearch';
import FilterOptionButton from '@/components/filters/FilterOptionButton';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import getFilterHandler from '@/services/filters';
import FilterTime from '@/components/filters/FilterTime';
import styled from 'styled-components';
import { BottomSheet, SheetContent } from "@biotic-ui/bottom-sheet";

const filterComponents = {
    check: FilterCheck,
    range: FilterSlider,
    search: FilterSearch,
    'option-button': FilterOptionButton,
    time: FilterTime,
}


function WidgetFilterFlight(props) {
    const { filters, title, dispatch, values, forCom, open, toggle, handleApplyFilter } = props;
    const handleValueChange = useCallback(
        ({ filter, value }) => {
            const handler = getFilterHandler(filter);
            if (handler) {
                dispatch({
                    type: "SET_FILTER_VALUE",
                    filter: filter.slug,
                    value: handler.isDefaultValue(filter, value) ? undefined : handler.serialize(value),
                });
                // toggle('filter')
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

    return <DrawerStyled open={open} onClose={() => toggle('filter')}>
        <SheetContent style={{
            background: 'rgb(93,156,209)', color: 'white',
            height: '100vh', overflowY: 'auto', overflowX: 'hidden',
            paddingTop: '20px'
        }}>
            {forCom !== 'hotel' &&
                <div className="d-flex px-4 justify-content-between">
                    <h6 onClick={() => toggle('filter')} className='font-weight-bold'>
                        <i className="fas fa-times mr-2"></i>
                        {title}</h6>
                    {/* <h6 className='font-weight-bold' onClick={handleReset} style={{ cursor: 'pointer' }}>
                        Reset
                    </h6> */}
                    <h6 className='font-weight-bold' onClick={handleApplyFilter} style={{ cursor: 'pointer' }}>
                        Apply
                    </h6>
                </div>
            }
            {filterList}
        </SheetContent>
    </DrawerStyled>
}

const DrawerStyled = styled(BottomSheet)`
    max-height:100%;
    min-height:100%;
    border-radius:0;
`

export default WidgetFilterFlight;