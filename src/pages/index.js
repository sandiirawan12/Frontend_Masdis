import DesktopLayout from '@/components/Layout';
import MobileLayout from '@/components-mobile/Layout';
import HomePageDesktop from '@/components/page/home-page/HomePage';
import HomePageMoblie from '@/components-mobile/page/home-page/HomePage';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';

function Page() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const HomePage = isTabletOrMobile ? HomePageMoblie : HomePageDesktop;

  return (
    <>
      <Head>
          <title>Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023</title>
          <meta
            name="description"
            content="Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023"
          />
      </Head>
      <HomePage/>
    </>
  )
}


Page.Layout = { desktop: DesktopLayout, mobile: MobileLayout }
export default Page;
