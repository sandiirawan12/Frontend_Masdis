import Layout from '@/components/Layout'
function Page() {
    return (
        <div>
            <header style={{
                background: 'linear-gradient(314deg,#0072ff 52%,#0072ff)'
            }} className="text-white">
                <div className="container py-5 text-center bg-ilus">
                    < div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <div className="my-5 py-5">
                                <h1 className="display-4 mb-3 font-weight-bold">Master Diskon untukmu</h1>
                                <p className="lead">Kami menyediakan penawaran paket perjalanan dan pendukungnya dengan harga yang kompetitif</p>
                                <a href='/help' className="btn btn-warning my-3">Info Bantuan</a>
                            </div>
                        </div>
                    </div>
                </div >
            </header >
            <section id="about" className="py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/illustration/undraw_at_the_park_2e47.svg" className="img-fluid h-illustation" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className>
                                <h1 className='font-weight-bold text-primary'>Overview</h1>
                                <p className="lead">Master Diskon merupakan perusahaan yang berdiri di bidang tur dan travel sejak tahun 2019 di Jakarta yang menyediakan berbagai kebutuhan perjalanan dan petualangan Anda. Master Diskon memberikan akses mudah ke berbagai pilihan pemesanan tiket pesawat dan hotel hanya dalam satu platform. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h4 className='font-weight-bold text-primary'>VISI</h4>
                                <p className="lead">Visi kami adalah menjadi perusahaan perjalanan terkemuka di Indonesia yang memberikan berbagai pilihan perjalanan serta keamanan kepada pelanggan kami dengan memperhatikan prosedur-prosedur kesehatan.</p>
                                <h4 className='font-weight-bold text-primary'>MISI</h4>
                                <p className="lead">Mengembangkan hubungan jangka panjang dengan klien dan mitra kami dengan memastikan kepuasan, keamanan dan kelangsungan bisnis. Kami juga selalu memperluas hubungan kami dengan maskapai penerbangan, hotel, restoran, operator tur dan agen perjalanan di Indonesia maupun di luar negri.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/illustration/undraw_Team_spirit_re_yl1v.svg" className="img-fluid h-illustation" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="py-5 bg-white">
                <div className="container">
                    <div className>
                        <h2 className="mb-5 font-weight-bold text-primary">Budaya Perusahaan</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-5">
                                <img src="https://cdn.masterdiskon.com/masterdiskon/icon/fe/profesional.png" style={{ height: 80 }} className="mb-3" />
                                <h4 className='font-weight-bold text-primary'>Profesional</h4>
                                <p className="lead">Detail, akurat, berdaya-saing, bekerja keras maupun bekerja cerdas</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-5">
                                <img src="https://cdn.masterdiskon.com/masterdiskon/icon/fe/inegritas.png" style={{ height: 70 }} className="mb-3" />
                                <h4 className='font-weight-bold text-primary'>Inegritas</h4>
                                <p className="lead">Disiplin, jujur, dapat dipercaya, gigih, dan dapat dipercaya</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-5">
                                <img src="https://cdn.masterdiskon.com/masterdiskon/icon/fe/pelayanan-terbaik.png" style={{ height: 70 }} className="mb-3" />
                                <h4 className='font-weight-bold text-primary'>Pelayanan Terbaik</h4>
                                <p className="lead">Berinisiasi untuk terus belajar, kreatif, dan inovatif.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-5">
                                <img src="https://cdn.masterdiskon.com/masterdiskon/icon/fe/penyempurnaan-berkelanjutan.png" style={{ height: 70 }} className="mb-3" />
                                <h4 className='font-weight-bold text-primary'>Penyempurnaan berkelanjutan</h4>
                                <p className="lead">Berinisiasi untuk terus belajar, kreatif, dan inovatif.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-5">
                                <img src="https://cdn.masterdiskon.com/masterdiskon/icon/fe/bersemangat.png" style={{ height: 70 }} className="mb-3" />
                                <h4 className='font-weight-bold text-primary'>Bersemangat</h4>
                                <p className="lead">Sepenuh hati dan giat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/illustration/undraw_Work_chat_re_qes4.svg" className="img-fluid h-illustation" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h1 className='font-weight-bold text-primary'>Layanan Kami</h1>
                                <p className="lead">Di Master Diskon, kami membuat program dengan penuh semangat dan memastikan pelanggan kami memiliki pengalaman menyenangkan dan menikmati perjalanan mereka sesuai dengan anggaran yang disediakan. Produk kami antara lain:

                                </p>
                                <ol className="lead" style={{ paddingLeft: '18px' }}>
                                    <li style={{ paddingLeft: '10px' }}>Tiket Pesawat</li>
                                    <li style={{ paddingLeft: '10px' }}>Reservasi Hotel</li>
                                    <li style={{ paddingLeft: '10px' }}>Paket Tur</li>
                                    <li style={{ paddingLeft: '10px' }}>Paket Hotel</li>
                                    <li style={{ paddingLeft: '10px' }}>Pelayanan VIP </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="py-5 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6  d-flex align-items-center">
                            <div>
                                <h1 className='font-weight-bold text-primary'>Lebih dari Travel Agent</h1>
                                <p className="lead">Kami juga menyediakan berbagai pilihan destinasi paket tur dan travel dengan penawaran harga yang kompetitif dari Master Diskon. Bekerja sama dengan puluhan maskapai penerbangan domestik dan Internasional, Master Diskon selalu siap menjadi teman perjalanan Anda kapan pun, dan di mana pun.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/illustration/undraw_Working_re_ddwy.svg" className="img-fluid h-illustation" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="py-5 bg-primary text-white">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <p className="lead">Slogan kami adalah “Allez Voyager Vivre et Aimer!&quot; yang berarti &quot;Ayo jalan-jalan, jalani hidup, dan mencintai&quot;. Slogan ini sejalan dengan kutipan dari penulis ternama asal Denmark H.C. Andersen yang mengatakan: "Hidup adalah perjalanan."</p>
                            <a href='/register' className="btn btn-lg btn-warning my-3">Daftar Sekarang</a>
                        </div>
                    </div>
                </div>
            </section>
        </div >

    );
}

Page.Layout = Layout

export default Page;