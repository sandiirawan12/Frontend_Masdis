function AccountPurchaseProductDetail(props) {
    const { purchase } = props
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-md-4">
                    <img src={purchase.image} className="mr-3 img-fluid" alt={purchase.name} />
                </div>
                <div className="col-md-8">
                    <span>{purchase.code}</span>
                    <p className="mb-0"><b>{purchase.name}</b></p>
                </div>      
            </div>
            <div className="mt-2">
                <p className="mb-0"><b>Description</b></p>
                <div dangerouslySetInnerHTML={{ __html: purchase.detail.description }}></div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <p className="mb-0">{purchase.detail.price.qty} x Rp{purchase.detail.price.price.toLocaleString()}</p>
                <h5 className="mb-0 text-primary">Rp{purchase.price.subtotal.toLocaleString()}</h5>
            </div>
        </div>

    );
}

export default AccountPurchaseProductDetail;