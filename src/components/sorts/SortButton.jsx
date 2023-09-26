import { useCallback } from "react";

function SortButton({ sort, dispatch }) {
    const handleSorting = useCallback(
        (value) => {
            dispatch({ type: 'SET_FILTER_VALUE', filter: 'orderType', value });
        },
        [dispatch],
    )
    return (
        <div className="header-div mb-2 d-flex">
            {sort.map((item, index) =>
                <div key={index} className="flex-fill  px-1">
                    <div className="btn btn-sm btn-primary btn-block font-weight-bold" onClick={() => handleSorting(item.value)}>{item.name}</div>
                </div>
            )}
        </div>
    );
}

export default SortButton;