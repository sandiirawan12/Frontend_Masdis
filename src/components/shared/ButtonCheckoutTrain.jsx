function ButtonChekoutTrain(props) {
    const { total, selectSeat, onSubmit, isLoading } = props
    return (
        <div className="fixed-bottom justify-content-around align-items-center py-2 px-5 border-top bg-white">
            <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                    <h3>Total</h3>
                    <h3 className="ml-4 text-primary font-weight-bold">Rp {total?.toLocaleString()}</h3>
                </div>
                <div className="col-md-2">
                    <button id="submit-cart" style={isLoading ?
                        {
                            opacity: 0.8,
                            pointerEvents: 'none'
                        }
                        :
                        {}}
                        onClick={selectSeat}
                        className="btn btn-md btn-warning font-weight-bold float-right">
                        {isLoading ? 'Loading...' : 'Pilih Seat'}
                    </button>
                </div>
                <div className="col-md-2">
                    <button id="submit-cart" style={isLoading ? {
                        opacity: 0.8,
                        pointerEvents: 'none'
                    } : {}} onClick={onSubmit} className="btn btn-md btn-primary font-weight-bold">
                        {isLoading ? 'Loading...' : 'Pesan Sekarang'}</button>
                </div>
            </div>
        </div>
    );
}

export default ButtonChekoutTrain;