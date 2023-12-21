function CardProductPurchase() {
    return (
        <div className="card-product">
        <div className="card-body departure-flights">
            <h6><u>Departure</u></h6> <a className="float-right collapsed" data-toggle="collapse" href="#detail_onwards" role="button" aria-expanded="false">Rincian <i className="fa fa-angle-down" /></a>
            <div className="d-flex">
                <ImageStyled placeholder='blur' blurDataURL width={70} height={70} src="https://cdn.masterdiskon.com/masterdiskon/product/flight/airline/garuda.png" alt="Soekarno-Hatta International Airport" />
                <h5 className="mb-0 ml-3"> Garuda</h5>
            </div>
            <div className="d-flex justify-content-between">
                <TimeLineStyled className="mb-0 mt-1">
                    <li className> 07:55:00 Soekarno-Hatta International Airport (CGK)<p className="mb-0 text-muted">
                        <small><i className="fa fa-clock" /> <span className="duration"> 1h20m</span>
                            <span className="airline_code"> GA </span>
                            <span className="mb-0 transit">Direct</span>
                        </small>
                    </p>
                    </li>
                    <li className> 09:15:00 Bandar Udara Internasional Kulon Progo (YIA)</li>
                </TimeLineStyled>
            </div>
            <Collapse isOpen={true}>
                <div className="row">
                    <div className="col-md-12 text-right"><hr /><span className="badge badge-primary">1</span></div>
                    <div className="col-md-3">
                        <div className="text-center">
                            <ImageStyled width={70} height={70} src="https://cdn.masterdiskon.com/masterdiskon/product/flight/airline/garuda.png"  alt="Soekarno-Hatta International Airport" />
                            <div>
                                <span>GA | Business Class (C)</span><br />
                                <span>Garuda</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <TimeLineStyled className='mb-0'>
                            <li>
                                <p className="mb-0"><b className="fs-med">22:10 </b>CGK Soekarno-Hatta International Airport</p>
                                <span>08 Des 2021 </span>
                                <div className="py-4"><span><Icon icon={ClockIcon} /> 1h20m </span></div>
                            </li>
                            <li>
                                <p className="mb-0"><b className="fs-med">09:15:00 </b> YIA Bandar Udara Internasional Kulon Progo</p>
                                <span>08 Des 2021 </span>
                            </li>
                        </TimeLineStyled>
                    </div>
                </div>
            </Collapse>
        </div>
        <div className="card-body return-flights">
        </div>
        <hr />
        <div className="card-body">
            <h5>Tamu</h5>
            <div className="table-responsive">
                <table className="table table-bordered mb-0">
                    <thead className="head-guest">
                        <tr>
                            <th className="text-center">No</th>
                            <th className="text-center">Nama</th>
                            <th className="text-center">Birthday</th>
                            <th className="text-center">Nation</th>
                            <th className="text-center">Passport</th>
                            <th className="text-center">Addon</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: 14 }} className="body-guest">
                        <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">Mr. tri subekti</td>
                            <td className="text-center">Birthday</td>
                            <td className="text-center">ID</td>
                            <td className="text-center">12345678</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-primary" onClick="open_modal('0')">Check</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td className="text-center">Mstr. Kinan Khairullah</td>
                            <td className="text-center">Birthday</td>
                            <td className="text-center">ID</td>
                            <td className="text-center">12345678</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-primary" onClick="open_modal('1')">Check</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td className="text-center">Miss. Azzahra Rafania</td>
                            <td className="text-center">Birthday</td>
                            <td className="text-center">ID</td>
                            <td className="text-center">12345678</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-primary" onClick="open_modal('2')">Check</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <hr />
        <div className="card-body">
            <h5><b>Tarif</b></h5>
            <div className="table-responsive">
                <table className="table table-bordered mb-0">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Type</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Fee</th>
                            <th>Tax</th>
                            <th className="text-center">Addons</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="price-flight-list">
                        <tr>
                            <td>1</td>
                            <td>adult</td>
                            <td>1</td>
                            <td>Rp. 4.451.000</td>
                            <td>Rp. 0</td>
                            <td>Rp. 592.677</td>
                            <td>Rp. 0</td>
                            <td>Rp. 5.043.677</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>infant</td>
                            <td>1</td>
                            <td>Rp. 446.000</td>
                            <td>Rp. 0</td>
                            <td>Rp. 50.839</td>
                            <td>Rp. 0</td>
                            <td>Rp. 496.839</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>child</td>
                            <td>1</td>
                            <td>Rp. 4.451.000</td>
                            <td>Rp. 0</td>
                            <td>Rp. 592.677</td>
                            <td>Rp. 0</td>
                            <td>Rp. 5.043.677</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}

export default CardProductPurchase;