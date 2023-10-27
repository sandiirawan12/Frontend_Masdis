import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import DownloadIcon from '@iconify/icons-fa-solid/download'

const IconStyled = styled(Image)`
	width: 60px;
	height: 60px;
	object-fit: contain;
	padding: 5px !important;
	border: 1px solid #eee !important;
  border-radius: 5px;
`

const LogoStyled = styled.img`
    height:70px;
    padding: 7px;
    vertical-align: middle;
`

const DownloadApp = styled.img`
    width:130px;
    height:90px;
    cursor: pointer;
`

const DownloadApp1 = styled.img`
    width:130px;
    height:45px;
    cursor: pointer;
`

function Footer() {
  return (
    <footer style={{ borderTop: '1.5px solid #eee' }} className="pt-5 border-top-eee bg-white desktop-only">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-3 p-0 mb-2">
            <Link href='/'>
                <Image src='https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/masterdiskon_logo.png' width={140} height={70} alt='Logo Masterdiskon' />
            </Link>
            <br />
            <br />
            <div>
              <h5 className='text-primary mb-2'><b>Tersedia Pembayaran</b></h5>
              <ul className="list-unstyled foot-link d-flex flex-wrap">
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoBCA.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoMandiri.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoBRI.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoBNI.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoVISA.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoMSTC.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoATM.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoQRIS.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoGOPAY.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoSHOPEEPAY.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoINDODANA.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/payment/logoAKULAKU.png" alt="Image Masterdiskon" /></li>
              </ul>
            </div>
          </div >
          <div className="col-md-3 p-0">
            <h6 className='text-primary'><b>Tentang Master Diskon</b></h6>
            <ul className="list-unstyled foot-link">
              <li className='mb-2'> <Link passHref href="/about/company">
                <a className="text-muted" >Tentang Kami</a>
              </Link>
              </li>
              <li className='mb-2'>
                <Link href={'/kebijakan/term-and-condition'} passHref>
                  <a className="text-muted" >Syarat dan Ketentuan</a>
                </Link>
              </li>
              <li className='mb-2'> <Link passHref href={"/kebijakan/pembatalan"}>
                <a className="text-muted">Persyaratan Pembatalan</a>
              </Link>
              </li>
              <li className='mb-2'> <Link passHref href={'/kebijakan'}>
                <a className="text-muted">Kebijakan Kami</a>
              </Link>
              </li>
              <li className='mb-2'> <Link passHref href="/about/contact">
                <a className="text-muted">Hubungi Kami</a>
              </Link>
              </li>
              <li className='mb-2'> <Link passHref href="/help">
                <a className="text-muted">Pusat Bantuan</a>
              </Link>
              </li>
            </ul >

            <h6 className='text-primary mt-4'><b>Follow media sosial kami</b></h6>
            <ul className="list-unstyled foot-link">
              <li className='mb-2'>
                <a href='https://twitter.com/master_diskon' target='_blank'>
                  <Icon icon='logos:twitter' className='mr-2' /><span className="text-muted">Twitter</span>
                </a>
              </li>
              <li className='mb-2'>
                <a href='https://www.instagram.com/master.diskon/' target='_blank'>
                  <Icon icon='skill-icons:instagram' className='mr-2' /><span className="text-muted">Instagram</span>
                </a>
              </li>
              <li className='mb-2'>
                <a href='https://www.facebook.com/masterdiskonint/' target='_blank'>
                  <Icon icon='logos:facebook' className='mr-2' /><span className="text-muted">Facebook</span>
                </a>
              </li>
              <li className='mb-2'>
                <a href='https://www.youtube.com/' target='_blank'>
                  <Icon icon='logos:youtube-icon' className='mr-2' /><span className="text-muted">Youtube</span>
                </a>
              </li>
              <li className='mb-2'>
                <a href='https://www.tiktok.com/en/' target='_blank'>
                  <Icon icon='logos:tiktok-icon' className='mr-2' /><span className="text-muted">Tiktok</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 p-0">
            <h6 className='text-primary'><b>Produk</b></h6>
            <ul className="list-unstyled foot-link">
              <li className='mb-2'> <Link passHref href="/flights">
                <a className="text-muted">Tiket Pesawat</a>
              </Link>
              </li>
              <li className='mb-2'>
                <Link href={'/hotels'} passHref>
                  <a className="text-muted">Hotel</a>
                </Link>
              </li>
              <li className='mb-2'> <Link passHref href={"/train"}>
                <a className="text-muted">Tiket Kereta</a>
              </Link>
              </li>
              <li className='mb-2'> <Link passHref href={'/kebijakan'}>
                <a className="text-muted">Voucher</a>
              </Link>
              </li>
              <li className='mb-2'> <Link passHref href="/about/contact">
                <a className="text-muted">Paket Wisata</a>
              </Link>
              </li>
            </ul >
            <h6 className='text-primary'><b>Download Masterdiskon App</b></h6>
            <div>
              <Link href='/download'>
                <DownloadApp src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/google-play-badge.svg" alt="Image Masterdiskon" />
              </Link>
            </div>
            <div>
              <Link href='/download'>
                <DownloadApp1 src="https://cdn.masterdiskon.com/masterdiskon/assets/front/img/icon/id-badge-ios.png" alt="Image Masterdiskon" />
              </Link>
            </div>
          </div>
          <div className="col-md-3 p-0">
            <h6 className='text-primary'><b>Bantuan</b></h6>
            <ul className="list-unstyled foot-link">
              <li>
                <span className="text-muted">cs@masterdiskon.com</span>
              </li>
              <li><span className="text-muted">Whatsapp 0822 5500 3525</span></li>
              <li><span className="text-muted">Telp (021) 27811300</span></li>
              <li className='mt-3'>
                <p className="text-muted">Gedung Alamanda Tower Lt.20/F,<br />Jl. TB Simatupang No.22-26, <br />  Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, DKI Jakarta 12430</p>
              </li>
            </ul>
            <div>
              <h6><b className='text-primary'>Group Perusahaan</b></h6>
              <ul className="list-unstyled foot-link d-flex flex-wrap">
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/assets/images/logoGroup/logoEurLog.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/assets/images/logoGroup/logoEurBok.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/assets/images/logoGroup/logoRace.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/assets/images/logoGroup/logoJaja.png" alt="Image Masterdiskon" /></li>
                <li><IconStyled blurDataURL width={65} height={65} placeholder='blur' className="icon-byr" src="https://cdn.masterdiskon.com/masterdiskon/assets/images/logoGroup/logoKatras.png" alt="Image Masterdiskon" /></li>
              </ul>
            </div>
          </div>
        </div >
      </div >
      <div className="text-center py-4 border-top text-white" style={{ background: "#0070ba" }}>
        <small>
          <b>Copyright Eureka Group © {new Date().getFullYear()} Masterdiskon.com.</b> Semua hak dilindungi undang-undang.
        </small>
        <br/>
        <small>
          Masterdiskon.com merupakan bagian dari Eureka Group, perusahaan terkemuka di Indonesia untuk perjalanan online dan layanan terkait lainnya.
        </small>
      </div>
    </footer >

  )
}

export default Footer
