import classNames from "classnames";
import { useEffect, useState } from "react";

const { Dropdown, DropdownToggle, DropdownMenu } = require("reactstrap");

function DropdownVisitor(props) {
    const { visitor, room, childAge, handleAddVisitor, handleChangeAge, willSearch, handleChangeRoom, handleReduceVisitor } = props;

    const defaultChildAge = () => {
        if (childAge) {
            if (typeof childAge === 'string') {
                return [childAge]
            } else if (typeof childAge === 'object') {
                return childAge
            }
        }
        return undefined
    }
    const [children, setChildren] = useState(defaultChildAge() ?? [])
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        let arr = [];
        for (let index = 0; index < visitor.child; index++) {
            arr[index] = index;
        }
        setChildren(arr)
    }, [visitor.child])


    return (
        <>
            <Dropdown style={{marginTop:'-7px'}} isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
                <DropdownToggle
                    tag={'div'}
                    className="form-group"
                    data-toggle="dropdown"
                    key={visitor.child}
                    >
                    <input type="text" readOnly value={`${Number(visitor['child'] || 0) + Number(visitor['adult'] || 0)} Tamu, ${room} Kamar`} className={classNames("form-control border-0 m-0 p-0 bg-transparent", {
                        'font-weight-bold': !willSearch
                    })} style={{ cursor: 'pointer', boxShadow: 'none', color: 'black' }} />
                </DropdownToggle>
                <DropdownMenu right className='px-3' style={{
                    maxHeight: '50vh', overflowY: 'auto', width: '280px'
                }} >
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <span><b>Tamu</b></span>
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
                    {/* <div className="d-flex align-items-center justify-content-between">
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
                    </div> */}
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
                                    <div className="col-md-6">
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
                </DropdownMenu>
            </Dropdown>
        </>)
}

export default DropdownVisitor;