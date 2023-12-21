import Layout from "@/components/Layout";
import styled from 'styled-components'

const ListStyled = styled.ol`
padding-left:18px;
    li{
        padding-left:15px;
    }

`
function Page() {
    return (
        <>
            <section className="py-5 bg-primary text-white">
                <div className="container">
                    <h3>PERUBAHAN DAN PEMBATALAN</h3>
                </div>
            </section>
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="mb-4">
                        <div className="text-dark">
                            <ListStyled>
                                <li>Kecuali secara tegas dinyatakan lain dalam Kebijakan ini atau ditentukan secara terpisah sesuai kebijakan Mitra, semua pembelian Produk di Master Diskon tidak dapat diubah, dibatalkan, dikembalikan uang, ditukar atau dialihkan ke orang/pihak lain.</li>
                                <li>Dengan melakukan pemesanan atau pembelian Produk di Master Diskon, Anda dianggap telah memahami, menerima dan menyetujui kebijakan dan ketentuan pembatalan, serta segala syarat dan ketentuan tambahan yang diberlakukan oleh Mitra. Harap dicatat bahwa tarif atau penawaran tertentu tidak memenuhi syarat untuk pembatalan atau pengubahan. Anda bertanggung-jawab untuk memeriksa dan memahami sendiri kebijakan dan ketentuan pembatalan tersebut sebelumnya.</li>
                                <li>Tata cara pengajuan perubahan dan pembatalan atas pesanan (jika ada) diatur dalam Surat Konfirmasi maupun media lainnya yang dapat Kami perbaharui dari waktu ke waktu.</li>
                                <li>Untuk setiap pembatalan pesanan yang Anda lakukan, Kami akan melakukan pengembalian dana dengan ketentuan sebagai berikut:
                                    <ListStyled type="a">
                                        <li>Pengembalian dana dilakukan dengan jumlah dan waktu sesuai dengan kebijakan dan ketentuan pembatalan yang diberlakukan oleh Mitra dan Kami.</li>
                                        <li>Jumlah dana yang dikembalikan kepada Anda tidak lebih besar dari jumlah nominal yang Anda bayarkan kepada Kami, disesuaikan dengan kebijakan yang diberlakukan oleh masing-masing Mitra dan Master Diskon. Dalam hal pengembalian dana, Master Diskon berhak menentukan biaya tambahan yang sesuai dengan kebijakan Kami untuk setiap pemesanan/pembelian yang dibatalkan.</li>
                                        <li>Kami akan meneruskan setiap pembatalan pesanan yang Anda lakukan kepada Mitra. Sehingga, Kami memerlukan waktu untuk mendapatkan kembali pembayaran yang Anda lakukan sebelumnya yang telah Kami teruskan kepada Mitra. Untuk itu, Anda memaklumi setiap waktu yang Kami butuhkan untuk mengembalikan dana tersebut kepada Anda.</li>
                                    </ListStyled>
                                </li>
                                <li>Anda menyetujui bahwa Kami hanya dapat memproses pengajuan pembatalan yang sesuai dengan syarat dan ketentuan pembatalan yang diberlakukan oleh Mitra, Syarat dan Ketentuan Penggunaan, serta syarat dan ketentuan lainnya yang berlaku pada Website Kami. Untuk itu, Anda membebaskan Kami dalam hal terdapat kerugian yang Anda derita akibat dari pengajuan pembatalan yang Anda lakukan maupun kelalaian Anda dalam memenuhi ketentuan syarat dan ketentuan pembatalan yang diberlakukan oleh Mitra, Syarat dan Ketentuan Penggunaan.</li>
                                <li>Walaupun sangat kecil kemungkinan Kami membatalkan atau mengubah pemesanan yang sudah Kami konfirm dalam Surat Konfirmasi, namun jika diperlukan, Kami akan memberitahu Anda secepat mungkin. Dalam hal pembatalan atau perubahan apapun terkait pesanan tersebut dilakukan atas dasar kebijakan/keputusan dari Mitra, hal tersebut adalah diluar kendali Kami. Oleh karena itu, maka tanggung jawab Kami hanya sebatas pelaksanaan refund sesuai dengan arahan serta syarat dan ketentuan yang ditetapkan oleh Mitra dan peraturan perundang-undangan yang berlaku.</li>
                                <li>Dalam hal Mitra Penyedia Produk mengalami keadaan dimana tidak bisa menyerahkan atau melaksanakan Produk, maka hak Anda tunduk pada syarat dan ketentuan Mitra atau pihak yang ditunjuk untuk bertindak untuk dan atas nama Mitra.</li>
                                <li>Kami tidak bertanggung-jawab ataupun menanggung kerugian Anda dalam hal Kami tidak dapat menyerahkan Produk atau memberi Layanan kepada Anda, akibat dari hal-hal yang terjadi akibat keadaan memaksa atau yang diluar kekuasaan Kami atau Mitra Kami untuk mengendalikan, seperti, tapi tidak terbatas pada: perang, kerusuhan, teroris, perselisihan industrial, tindakan pemerintah, epidemik, pandemik, bencana alam, kebakaran atau banjir, cuaca ekstrim, dan lain sebagainya.</li>
                                <li>Jika Anda tidak mendapatkan Produk sesuai dengan Surat Konfirmasi, maka Kami akan merekomendasikan Produk yang sejenis dengan harga yang sejenis atau setara dengan Produk yang Anda beli, tanpa ada beban biaya tambahan, atau uang Anda kembali.</li>
                            </ListStyled>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

Page.Layout = Layout

export default Page;