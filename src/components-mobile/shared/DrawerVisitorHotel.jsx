import { BottomSheet, SheetHeader } from "@biotic-ui/bottom-sheet";
import { useEffect, useState } from "react";
import styled from "styled-components";

function DrawerVisitorHotel(props) {
    const { isOpen, visitor, room, childAge, handleAddVisitor, handleChangeAge, willSearch, handleChangeRoom, handleReduceVisitor, onClose } = props;


    const defaultChildAge = () => {
        if (childAge) {
            if (typeof childAge === 'string') {
                return [childAge]
            } else if (typeof childAge === 'object') {
                return childAge
            }
        }
        return undefined
    };

    const [children, setChildren] = useState(defaultChildAge() ?? []);

    useEffect(() => {
        let arr = [];
        for (let index = 0; index < visitor.child; index++) {
            arr[index] = index;
        }
        setChildren(arr)
    }, [visitor.child])

    return <>
        <RootStyled height={1} open={isOpen} onClose={onClose}>
            <SheetHeader className="d-flex justify-content-between mb-3 align-items-center">
                <h5 className="font-weight-bold w-100">Kamar & Tamu</h5>
                <h5 onClick={onClose}>
                    <i class="fas fa-times"></i>
                </h5>
            </SheetHeader>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <span><b>Dewasa</b></span>
                </div>
                <div className="input-group w-50 mb-2 cariqty">
                    <div className="input-group-prepend">
                        <button style={{
                            cursor: visitor['adult'] === 1 && 'no-drop'
                        }}
                            disabled={
                                visitor['adult'] === 1
                            } onClick={() => handleReduceVisitor('adult')} className="btn btn-outline-secondary form-control flight_minus" type="button">-</button>
                    </div>
                    <input type="text" value={visitor['adult']} className="form-control text-center" readOnly />
                    <div className="input-group-append">
                        <button onClick={() => handleAddVisitor('adult')} className="btn btn-outline-secondary"
                            style={{
                                cursor: visitor['adult'] === 32 && 'no-drop'
                            }}
                            disabled={
                                visitor['adult'] === 32
                            } type="button">+</button>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <span><b>Anak</b></span><br />
                    <small>(dibawah 12 tahun)</small>
                </div>
                <div className="input-group w-50 mb-2 cariqty">
                    <div className="input-group-prepend">
                        <button style={{
                            cursor: visitor['child'] === 0 && 'no-drop'
                        }}
                            disabled={
                                visitor['child'] === 0
                            } onClick={() => handleReduceVisitor('child')} className="btn btn-outline-secondary form-control flight_minus0" type="button">-</button>
                    </div>
                    <input type="text" value={visitor['child']} className="form-control text-center numberonly hitung flight_dropanak" name="anak" readOnly />
                    <div className="input-group-append">
                        <button style={{
                            cursor: visitor['child'] === 10 && 'no-drop'
                        }}
                            disabled={
                                visitor['child'] === 10
                            } onClick={() => handleAddVisitor('child')} className="btn btn-outline-secondary form-control flight_plus" type="button">+</button>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <span><b>Kamar</b></span><br />
                </div>
                <div className="input-group w-50 mb-2 cariqty">
                    <div className="input-group-prepend">
                        <button style={{
                            cursor: room === 1 && 'no-drop'
                        }}
                            disabled={
                                room === 1
                            } onClick={() => handleChangeRoom('reduce')} className="btn btn-outline-secondary form-control flight_minus0" type="button">-</button>
                    </div>
                    <input type="text" value={room} className="form-control text-center" readOnly />
                    <div className="input-group-append">
                        <button style={{
                            cursor: room === 8 && 'no-drop'
                        }}
                            disabled={
                                room === 8
                            } onClick={() => handleChangeRoom('add')} className="btn btn-outline-secondary form-control flight_plus" type="button">+</button>
                    </div>
                </div>
            </div>
            {children.length > 0 &&
                <>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <label className="text-secondary">Tambahkan umur anak</label>
                        </div>
                        {children.map((item, index) => (
                            <div className="col-6">
                                <div className="form-group">
                                    <label for="">Anak {++item}</label>
                                    <select value={childAge[index]} onChange={(e) => handleChangeAge(index, e.target.value)} className="form-control" name="" id="">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
                                            <option>{item}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                </>

            }
        </RootStyled>
    </>
}

const RootStyled = styled(BottomSheet)`
    border-radius:0;
    /* min-height:50vh; */
    padding:10px;

`

export default DrawerVisitorHotel;