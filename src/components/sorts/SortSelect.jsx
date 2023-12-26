import { useCallback } from "react";

function SortSelect({ sort, dispatch, state }) {
    const handleSorting = useCallback(
        (e) => {
            const { value } = e.target
            console.log(value);
            dispatch({ type: 'SET_FILTER_VALUE', filter: 'orderType', value });
        },
        [dispatch],
    )
    return (
        <div className="input-group">
            <select id="sortPrice" value={state.filters.orderType} name="sortPrice" className="form-control shortPriceDekstop" onChange={handleSorting}>
                {sort.map(item => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default SortSelect;