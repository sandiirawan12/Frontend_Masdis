import { Icon } from "@iconify/react"
import DownloadIcon from '@iconify/icons-eva/download-fill';
import Link from "next/link"
import styled from "styled-components"

const PhoneImage = styled.img`
height:400px;
`

const DownloadApp = styled.img`
    width:130px;
    height:90px;
    cursor: pointer;
`

const DownloadApp1 = styled.img`
    width:130px;
    height:40px;
    cursor: pointer;
`

function DownloadPage() {
    return (
     <section className="pt-5 bg-white sectionClass">
  <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-md-3 text-right">
        <PhoneImage data-src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup mobile-01.png" className="img-mockup lazy entered loaded" data-ll-status="loaded" src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup mobile-01.png" />
      </div>
      <div className="col-md-6">
        <div className="text-center">
          <h3>Masterdiskon Siap Menemani Wisata Anda</h3>
          <div className="line-pendek" />
          <p className="my-4 px-5 mx-3">Unduh aplikasi masterdiskon untuk pembayaran yang lebih mudah &amp; lebih cepat. Kami dapat mengirimkan Anda tautan unduhan untuk segera memulai!</p>
          <div>
            <Link href='/download'>
              <DownloadApp src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/google-play-badge.svg" />
            </Link>
          </div>
          <div>
            <Link href='/download'>
              <DownloadApp1 src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/id-badge-ios.png" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <PhoneImage data-src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup mobile-02.png" className="img-mockup lazy entered loaded" data-ll-status="loaded" src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/banner/mockup mobile-02.png" />
      </div>
    </div>
  </div>
</section>

    )
}

export default DownloadPage
