import { BottomSheet, SheetContent } from '@biotic-ui/bottom-sheet'
function DrawerPassangerFlight(props) {
    const { passanger, addPassanger, reducedPassanger,open,onClose } = props

    return (
        <BottomSheet open={open} onClose={onClose}>
            <SheetContent style={{padding:'20px'}}>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <span><b>Dewasa</b></span><br />
                        <small className="text-muted"> &gt; 12 thn</small>
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
                        <span><b>Anak-anak</b></span><br />
                        <small className="text-muted">2-12 thn</small>
                    </div>
                    <div className="input-group w-50 mb-2 cariqty">
                        <div className="input-group-prepend">
                            <button onClick={() => reducedPassanger('child')} className="btn btn-outline-secondary form-control flight_minus0" type="button">-</button>
                        </div>
                        <input value={passanger['child']} type="text" className="form-control text-center numberonly hitung flight_dropanak" name="anak" readOnly />
                        <div className="input-group-append">
                            <button onClick={() => addPassanger('child')} className="btn btn-outline-secondary form-control flight_plus" type="button">+</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <span><b>Bayi</b></span><br />
                        <small className="text-muted">0-2 thn</small>
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
            </SheetContent>
        </BottomSheet>
    );
}

export default DrawerPassangerFlight;