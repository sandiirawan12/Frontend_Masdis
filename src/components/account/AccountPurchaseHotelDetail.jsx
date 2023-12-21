import { Icon } from "@iconify/react";

function AccountPurchaseHotelDetail(props) {
    const { purchase } = props;

    const renderStar = () => {
        let arr = [];
        for (let index = 0; index < Number(purchase.class); index++) {
            arr[index] = index;
        }
        return arr.map(() => (<i className="text-warning fa fa-star" />))
    }

    return (
        <>
            <div className="card-product">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <img src={purchase.image} className="mr-3 img-fluid rounded" style={{ width: '160px', height: '160px' }} />
                        </div>
                        <div className="col-md-9 col-9">
                            <h5 className="mb-0 font-weight-bold">
                                <Icon icon="solar:city-line-duotone" className="mr-3 text-primary" style={{ fontSize: '32px' }} />
                                <span>{purchase.name}</span>
                                <br />
                                <small style={{ fontSize: '14px' }}>
                                    <span className="text-success mr-1">
                                        <Icon icon="solar:like-bold-duotone" className="mr-3"/>
                                        Pilihan tepat
                                    </span> 
                                    untuk tempat menginapmu.
                                </small>
                            </h5>
                            <hr />
                            <div>
                                <div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <small className="mb-0">
                                            <b>Check-in</b><br />
                                            <span style={{ fontSize: '18px' }} className="font-weight-bold">{purchase.period.dateFrom}</span> <br />
                                            <span>Sebelum 14:00</span>
                                        </small>
                                        <small className="mb-0">
                                            <b>Check-out</b><br />
                                            <span style={{ fontSize: '18px' }} className="font-weight-bold">{purchase.period.dateTo}</span> <br />
                                            <span>Dari 12:00</span>
                                        </small>
                                        <small className="mb-0">
                                            <b>Durasi</b><br />
                                            <span>{purchase.period.type}</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <span className="font-weight-bold">{purchase?.options[0]?.name || '-'}</span>
                            <br />
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="text-secondary">Tamu per kamar</span>
                                </div>
                                <div className="col-md-6">
                                    <span>{purchase?.room?.numOfAdults} Tamu</span>
                                </div>
                                <div className="col-md-6 mt-2">
                                    <span className="text-secondary">Tipe Tempat Tidur</span>
                                </div>
                                <div className="col-md-6 mt-2">
                                    <span>{purchase?.options[0]?.typeBed}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <p className={`mb-1 ${purchase?.room?.breakfastIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                <Icon icon="fluent:food-24-regular" className="mr-2" />{purchase?.room?.breakfastIncluded ? 'Sarapan Gratis' : 'Tanpa Sarapan'}
                            </p>
                            <p className={`mb-1 ${purchase?.room?.wifiIncluded ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                <Icon icon="mingcute:wifi-line" className="mr-2" />{purchase?.room?.wifiIncluded ? 'WiFi Gratis' : 'Tidak Ada WiFi'}
                            </p>
                            <p className={`mb-1 ${purchase?.room?.cancellationPolicy ? 'text-success' : 'text-secondary'} ml-2 mr-2`}>
                                <Icon icon="tabler:free-rights" className="mr-2" />{purchase?.room?.cancellationPolicy ? 'Bisa Refund' : 'Tidak Bisa Refund'}
                            </p>
                            <p className={`mb-1 text-secondary ml-2 mr-2`}>
                                <Icon icon="fluent-mdl2:date-time" className="mr-2" />Tidak Bisa Reschedule
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AccountPurchaseHotelDetail;