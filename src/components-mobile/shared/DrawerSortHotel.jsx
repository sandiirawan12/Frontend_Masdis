import { BottomSheet, SheetHeader } from "@biotic-ui/bottom-sheet";
import { useCallback } from "react";
import styled from "styled-components";

function DrawerSortHotel(props) {
    const { data, dispatch, state, open, toggle } = props

    const handleSorting = useCallback(
        (value) => {

            dispatch({ type: 'SET_FILTER_VALUE', filter: 'orderType', value });
        },
        [dispatch],
    )
    return (
        <RootStyled open={open} height={1} onClose={() => toggle('sort')}>
            <SheetHeader className="d-flex justify-content-between px-3 mb-2 align-items-center">
                <h5 className="font-weight-bold w-100">Urutkan</h5>
                <h5 onClick={() => toggle('sort')}>
                    <i class="fas fa-times"></i>
                </h5>
            </SheetHeader>
            <ul className="list-group pb-2" style={{ border: 'none', borderRadius: 0 }}>
                <li onClick={() => handleSorting('')} className="list-group-item" style={{ borderBottom: '1px solid #eaeaea', cursor: 'pointer', borderLeft: 0, borderTop: 0, borderRight: 0, borderRadius: 0 }}>
                    <div className="form-check p-0" style={{ cursor: 'pointer' }}>
                        <label className="form-check-label w-100 d-flex justify-content-between align-items-center">
                            <div>
                                Relevansi
                            </div>
                            <div>
                                <input type="radio" name="sort" checked={!state.filters.orderType} className="form-check-input position-relative" />
                            </div>
                        </label>
                    </div>

                </li>
                {data.sorts.map(item => {
                    return (
                        <li onClick={() => handleSorting(item.value)} className="list-group-item" style={{ borderBottom: '1px solid #eaeaea', cursor: 'pointer', borderLeft: 0, borderTop: 0, borderRight: 0, borderRadius: 0 }}>
                            <div className="form-check p-0" style={{ cursor: 'pointer' }}>
                                <label className="form-check-label w-100 d-flex justify-content-between align-items-center">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        <input type="radio" name="sort" checked={item.value === state.filters.orderType} className="form-check-input position-relative" />
                                    </div>
                                </label>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </RootStyled>
    );
}


const RootStyled = styled(BottomSheet)`
    border-radius:0;
    /* min-height:50vh; */
    padding:10px;

`

export default DrawerSortHotel;