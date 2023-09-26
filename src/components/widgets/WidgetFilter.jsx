import FilterCheck from '@/components/filters/FilterCheck'
import FilterSlider from '../filters/FilterSlider';
import FilterSearch from '../filters/FilterSearch';
import FilterOptionButton from '../filters/FilterOptionButton';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import getFilterHandler from '@/services/filters';
import FilterTime from '../filters/FilterTime';
import styled from 'styled-components';

const filterComponents = {
    check: FilterCheck,
    range: FilterSlider,
    search: FilterSearch,
    'option-button': FilterOptionButton,
    time: FilterTime,
}

function WidgetFilter(props) {
    const { filters, title, dispatch, values, forCom } = props;
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
        <>
            {forCom !== 'hotel' &&
                <div className="d-flex text-primary justify-content-between align-items-center mb-2">
                    <h6 className='font-weight-bold'>{title}</h6>
                    <button type="button" onClick={handleReset} className="btn btn-sm btn-danger font-weight-bold">
                        Reset
                    </button>

                    {/* <h6 className='font-weight-bold' onClick={handleReset} style={{ cursor: 'pointer' }}>
                    </h6> */}
                </div>
            }
            <RootStyled className="card border-0">
                {filterList}
            </RootStyled>
        </>
    );
}

const RootStyled = styled.div`
    background: rgb(93,156,209);
    border-radius: 15px;
    color: white;
    box-shadow: 6px 6px 10px -5px rgba(0,0,0,.5);

`

WidgetFilter.propTypes = {
    filters: PropTypes.array,
    values: PropTypes.object,
    title: PropTypes.node,
    dispatch: PropTypes.func
}

export default WidgetFilter;