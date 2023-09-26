import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Icon } from '@iconify/react';
import UserIcon from '@iconify/icons-fa-solid/user';

function DropdownPassangerTrain(props) {
    const { passanger, addPassanger, reducedPassanger } = props
    const [isOpen, setIsOpen] = useState(false);

    const countPassanger = () => {
        let result = 0;
        Object.keys(passanger).forEach(item => {
            result += Number(passanger[item])
        })
        return result;
    }

    const handleOpen = () => {
        setIsOpen(prevState => !prevState)
    }
    return (
        <>
            <Dropdown isOpen={isOpen} toggle={handleOpen}>
                {/* <label className="font-weight-bold">Penumpang</label> */}
                <DropdownToggle
                    tag={'div'}
                    data-toggle="dropdown" className="input-group">
                    <div className="input-group-append">
                        <span className='input-group-text text-danger'>
                            <Icon icon='heroicons:user-group' />
                        </span>
                    </div>
                    <input type="text" readOnly value={`${countPassanger()} Penumpang`} className="form-control" />
                </DropdownToggle>
                <DropdownMenu right className='px-3' >
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <span><b>Dewasa</b></span><br />
                            <small className="text-muted">≥ 3 Tahun</small>
                        </div>
                        <div className="input-group w-50 mb-2 cariqty">
                            <div className="input-group-prepend">
                                <button onClick={() => reducedPassanger('adult')} className="btn btn-outline-secondary form-control flight_minus" type="button">-</button>
                            </div>
                            <input type="text" className="form-control text-center numberonly hitung flight_dropdewasa" value={passanger.adult} readOnly />
                            <div className="input-group-append">
                                <button onClick={() => addPassanger('adult')} className="btn btn-outline-secondary form-control flight_plus" type="button">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <span><b>Bayi</b></span><br />
                            <small className="text-muted"> {'< 3'} Tahun</small>
                        </div>
                        <div className="input-group w-50 mb-2 cariqty">
                            <div className="input-group-prepend">
                                <button onClick={() => reducedPassanger('infant')} className="btn btn-outline-secondary form-control flight_minus0" type="button">-</button>
                            </div>
                            <input value={passanger.infant} type="text" className="form-control text-center numberonly hitung flight_dropbayi" readOnly />
                            <div className="input-group-append">
                                <button onClick={() => addPassanger('infant')} className="btn btn-outline-secondary form-control flight_plus" type="button">+</button>
                            </div>
                        </div>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </>
    );
}

export default DropdownPassangerTrain;