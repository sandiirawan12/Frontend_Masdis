function ButtonChekout(props) {
    const { total, onSubmit, isLoading } = props
    return (
        <div className="fixed-bottom justify-content-around align-items-center py-2 px-5 border-top bg-white">
            <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                    <h3>Total</h3>
                    <h3 className="ml-4 text-primary font-weight-bold">Rp{total?.toLocaleString()}</h3>
                </div>
                <div className="col-md-4">
                    <button id="submit-cart" style={isLoading ? {
                        opacity: 0.8,
                        pointerEvents: 'none'
                    } : {}} onClick={onSubmit} className="btn btn-lg btn-primary submit-book d-inline float-right mr-2">
                        {isLoading ? 'Loading...' : 'PESAN SEKARANG'}</button>
                </div>
            </div>
        </div>
    );
}

export default ButtonChekout;