function AccountPurchaseTrainDetail(props) {
    const { purchase } = props;

    // const renderStar = () => {
    //     let arr = [];
    //     for (let index = 0; index < Number(purchase.class); index++) {
    //         arr[index] = index;
    //     }
    //     return arr.map(() => (<i className="text-warning fa fa-star" />))
    // }

    return (
        <>
            <div>
                dwwdwaddwd
            </div>
            {/* <div className="card-product">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <img src={purchase.image} className="mr-3 img-fluid" style={{ height: '140px !important' }} />
                        </div>
                        <div className="col-md-9 col-9">
                            <h5 className="mb-0 text-primary">{purchase.name}<span>
                                {renderStar()}
                            </span>
                            </h5>
                            <p className="mb-0"><span><i className="fa fa-map-marker" /> {purchase.detail.city}</span></p>
                            <p>{purchase.detail.address}</p>
                            <hr />
                            <div className>
                                <div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p className="mb-0"><b>Check-in</b><span><br />{purchase.period.dateFrom}</span></p>
                                        <p className="mb-0"><b>Check-out</b><span><br />{purchase.period.dateTo}</span></p>
                                        <p className="mb-0"><b>Durasi</b><span><br />{purchase.period.type}</span></p>
                                    </div>
                                    <hr />
                                    <h6 className="mt-1">Detail Kamar</h6>
                                    <div className="d-flex my-2 flex-row justify-content-between" >
                                        <span>Room type</span>
                                        <span>{purchase?.options[0]?.name || '-'}</span>
                                    </div>
                                    <div className="d-flex my-2 flex-row justify-content-between" >
                                        <span>Fasilitas sarapan</span>
                                        {purchase?.room?.breakfastIncluded ?
                                            <div className="text-success">Termasuk sarapan</div>
                                            :
                                            <div className="text-danger">Tidak termasuk sarapan</div>
                                        }
                                    </div>
                                    <div className="d-flex my-2 flex-row justify-content-between" >
                                        <span>Tamu</span>
                                        <span>{purchase?.room?.numOfAdults} Tamu</span>
                                    </div>
                                    <div className="d-flex my-2 flex-row justify-content-between" >
                                        <span>Kamar</span>
                                        <span>{purchase?.room?.numOfRoom} Kamar</span>
                                    </div>
                                    <div className="d-flex my-2 flex-row justify-content-between" >
                                        <span>Permintaan Khusus</span>
                                        <span>{purchase.specialRequest ?? '-'}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-0">Checkin:  {purchase.period.dateFrom}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="mb-0"> <span className="font-weight-bold">Kebijakan Pembatalan:</span> <br /> {purchase.room.cancellationPolicy}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default AccountPurchaseTrainDetail;