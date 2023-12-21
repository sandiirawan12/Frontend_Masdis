function AccountPurchaseProductDetail(props) {
    const { purchase } = props
    return (
        <>
            <div classname="card" style={{
                background: 'white',
                borderRadius: '15px',
                boxShadow: '5px 5px 10px -5px rgba(0, 0, 0, .5) ',
                marginTop: '10px',
                padding: '15px'
            }}>
                <div classname="card-body">
                    <span class="badge badge-warning">Product</span>
                    <div className="row mt-2">
                        <div className="col-4">
                            <img src={purchase.image} style={{ width: '100%', objectFit: 'cover', height: '100px', borderRadius: '15px' }} />
                        </div>
                        <div className="col-8">
                            <h6 className="mb-0 font-weight-bold text-primary">{purchase.name}</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div classname="card" style={{
                background: 'white',
                borderRadius: '15px',
                boxShadow: '5px 5px 10px -5px rgba(0, 0, 0, .5) ',
                marginTop: '10px',
                padding: '15px'
            }}>
                <div classname="card-body">
                    <h6 className="font-weight-bold">Guest</h6>
                    {purchase?.guests?.list?.map(item => (
                        <div>
                            <small className="font-weight-bold d-block" style={{marginBottom:'-8px'}}>{item?.title} {item?.firstName} {item?.lastName}</small>
                            <small>{item?.nationality ?? 'Nationality'}</small>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default AccountPurchaseProductDetail;