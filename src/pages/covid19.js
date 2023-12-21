import Layout from "@/components/Layout";
import Link from "next/link";

function Page() {
    return (
        <>
            <section>
                <div style={{ height: '300px', width: '100%' }}>
                    <img className="w-100 h-100" style={{ objectFit: 'cover' }} src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/covid-kebijakan.webp" alt="Kebijakan covid" />
                </div>
                <div className="container">
                    <div className="py-5">
                        <div className="mb-5">
                            <h1 className="h2"><b>Ketentuan Umum Perjalanan Selama Pandemi</b></h1>
                            <p>Terakhir diperbarui <b>03 Jul 2021</b></p>
                        </div>
                        <div className="text-justify">
                            <p>Master Diskon merangkum beberapa update ketentuan perjalanan moda trasportasi udara dan darat selama pandemi.<br />Syarat Perjalanan Baru Setelah Penetapan PPKM Darurat<br />Setelah penetapan Pemberlakuan Pembatasan Kegiatan Masyarakat (PPKM) Darurat yang mulai diterepkan per 3-20 Juli. Kebijakan tersebut diambil sebgai salah satu cara memtus rantai penyebaran virus covid-19.<br />Penerapan persyaratan perjalanan baru untuk moda trasportasi udara, laut dan kereta baru akan mulai berlaku pada 5 Juli 2021.<br />Ketentuan umum yang berlaku pada moda transportasi umum yaitu :</p><ol><li>Wajib menunjukkan kartu vaksin Covid-19 yang menandakan minimal sudah vaksin dosis pertama&nbsp; </li><li>Wajib menunjukan hasil tes negative Covid-19 RT PCR atau pun swab antigen.</li><li>Mengisi
                                mengisi Kartu Kewaspadaan Kesehatan Elektronik atau e-Health Alert Card
                                (e-HAC) pada perjalanan udara, laut, dan penyeberangan.</li></ol><p><br /></p><p><b>A. Syarat Perjalanan Domestik Moda Trasportasi Udara<br /></b><b>- Dari dan Ke wilayah Jawa-Bali</b><br /></p><ol><li>Wajib menunjukan kartu vaksin</li><li>Wajib menunjukan hasil tes negatif Covid-19 dari RT-PCR yang sampelnya diambil 2x24 jam dari jadwal keberangkatan.</li></ol><p><b>- Dari dan Ke wilayah selain Jawa-Bali</b></p><ol><li>Wajib menunjukan hasil tes RT-PCR yang sampelnya diambil maksimal 2x24
                                    jam atau swab antigen yang sampelnya diambil maksimal 1x24 jam dari
                                    jadwal keberangkatan.</li></ol><p><b>B. Aplikasi yang Dibutuhkan</b><br />Mengisi e-HAC Indonesia (download di <a href="https://play.google.com/store/apps/details?id=com.kemenkes.inahac&hl=en_US&gl=US" target="_blank">Google Play Store</a> atau <a href="https://apps.apple.com/id/app/ehac-indonesia/id1516837421" target="_blank">Apple App Store</a>)<br /><br /><b>C. Seat Distancing</b><br />Seat distancing diterapkan oleh maskapai Garuda Indonesia dengan ketentuan:<br />Penumpang setidaknya berjarak 1 kursi atau aisle dengan penumpang lainnya.<br />Mengosongkan 1 row antar kursi lainnya. Informasi lebih lanjut terkait seat distancing dapat kamu temukan di website Garuda Indonesia.<br />Seat distancing dan protokol kesehatan yang diterapkan setiap maskapai mungkin berbeda.&nbsp; Untuk informasi lebih lanjut, kamu bisa mengunjungi website di bawah ini:<br /></p><ul><li><a href="https://www.airasia.com/aa/covid-19/en/gb/flying-safe-with-airasia.html" target="_blank">AirAsia</a></li><li><a href="https://batikair.com/id/" target="_blank">Batik Air</a></li><li><a href="https://www.citilink.co.id/citilink-terkait-covid-19" target="_blank">Citilink</a></li><li><a href="https://www.lionair.co.id/" target="_blank">Lion Air</a></li><li><a href="https://www.flynamair.com/" target="_blank">Nam Air</a></li><li><a href="https://www.sriwijayaair.co.id/" target="_blank">Sriwijaya Air</a><br /></li></ul>          </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-3 text-right desktop-only">
                            <img style={{ height: '400px' }} data-src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup%20mobile-01.png" className="img-mockup lazy entered loaded" data-ll-status="loaded" src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup%20mobile-01.png" />
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <h3>Master Diskon saat bepergian</h3>
                                <div className="line-pendek" />
                                <p className="my-4 px-5 mx-5">Unduh aplikasi seluler kami untuk pembayaran yang lebih mudah &amp; lebih cepat. Kami dapat mengirimkan Anda tautan unduhan untuk segera memulai!</p>
                                <div className>
                                    <Link href="/download" >
                                        <a className="btn btn-dark"><i className="fa fa-download" /> Unduh aplikasi</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 desktop-only">
                            <img style={{ height: '400px' }} data-src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup%20mobile-02.png" className="img-mockup lazy entered loaded" data-ll-status="loaded" src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup%20mobile-02.png" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

Page.Layout = Layout

export default Page;