function DownloadPage() {
    return (
        <>
            <section className="my-5">
                <div className="container container-blog">
                    <div className="text-center">
                        <h2>Masterdiskon tersedia saat bepergian</h2>
                        <div className="line-pendek" />
                        <p className="my-4 px-5 mx-5">Unduh aplikasi seluler kami untuk checkout lebih mudah & cepat. Kami dapat mengirimkan Anda tautan unduhan untuk segera memulai!</p>
                        <div className="row">
                            <div className="col-6">
                                <a href="https://play.google.com/store/apps/details?id=com.masterdiskon">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/google-play-badge.svg" className="mt-2 img-icon-product img-fluid" />
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="https://apps.apple.com/id/app/masdis/id1549125351">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/id-badge-ios.png" className="mt-2 img-icon-product img-fluid" style={{ width: '100%', height: '110px' }} />
                                </a>
                            </div>
                        </div>
                        <p className="mt-3"><small>Tersedia untuk perangkat Android dan iOS</small></p>
                    </div>
                </div>
            </section>

            <div>
                <section className="py-5 bg-white">
                    <div className="container container-blog">
                        <div className="text-center">
                            <h5 className="mb-3">PRODUCT</h5>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="text-center">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/icon/original/product/svg/ic-md-pd-flight.svg" className="img-fluid" />
                                    <span>Flights</span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="text-center">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/icon/original/product/svg/ic-md-pd-tour.svg" style={{ maxWidth: '100%', height: 'auto' }} />
                                    <span>Tours</span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="text-center">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/icon/original/product/svg/ic-md-pd-hotel.svg" alt className="img-fluid" />
                                    <span>Hotels</span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="text-center">
                                    <img src="https://cdn.masterdiskon.com/masterdiskon/assets/icon/original/product/svg/ic-md-pd-deals.svg" alt className="img-fluid" />
                                    <span>Travel Deals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-3 bg-white desktop-only">
                    <div className="container container-blog">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="display-4">Dimana saja</h4>
                                <p className="lead">Pergi kemanapun tetap terhubung dengan penawaran menarik Masterdiskon</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup mobile-02.png" style={{width:'200px'}} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="py-3 bg-white desktop-only">
                <div className="container container-blog">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup mobile-01.png"  style={{width:'200px'}} className="img-mockup" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="display-4">Kapan saja</h4>
                            <p className="lead">Masterdiskon mempersiapkan keperluan perjalanan meski anda sedang sibuk</p>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default DownloadPage;