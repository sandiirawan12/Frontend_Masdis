import { BottomSheet, SheetContent, SheetHeader } from "@biotic-ui/bottom-sheet";
import { useCallback } from "react";
import { Modal, ModalBody } from "reactstrap";

function WidgetSort(props) {
    const { data, dispatch, state, statSort, open, toggle, setStatSort } = props;


    const handleSorting = useCallback(
        (value, asc) => {
            dispatch({ type: 'SET_FILTER_VALUE', filter: 'orderType', value });
            toggle('sort')
            setStatSort(prev => ({ ...prev, [value]: asc }))
        },
        [dispatch, setStatSort, toggle],
    )

    return <BottomSheet open={open} onClose={() => toggle('sort')} centered>
        <SheetHeader className="d-flex justify-content-between px-3 mb-2 mt-3 align-items-center">
            <h5 className="font-weight-bold w-100">Urutkan</h5>
            <h5 onClick={() => toggle('sort')}>
                <i class="fas fa-times"></i>
            </h5>
        </SheetHeader>
        <SheetContent>
            <ul className="list-group" style={{ border: 'none', borderRadius: 0 }}>
                {data.sorts.map(item => {
                    return (
                        <li onClick={() => handleSorting(item.value, item.asc)} className="list-group-item" style={{ borderBottom: '1px solid #eaeaea', cursor: 'pointer', borderLeft: 0, borderTop: 0, borderRight: 0, borderRadius: 0 }}>
                            <div className="form-check p-0" style={{ cursor: 'pointer' }}>
                                <label className="form-check-label w-100 d-flex justify-content-between align-items-center">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        <input type="radio" name="sort" className="form-check-input position-relative" checked={
                                            state.filters.orderType === item.value && item.asc === statSort[item.value]
                                        } />
                                    </div>
                                </label>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </SheetContent>
    </BottomSheet>
}

export default WidgetSort;