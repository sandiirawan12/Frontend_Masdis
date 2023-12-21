import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import DesktopLayout from '@/components/Layout';
import MobileLayout from '@/components-mobile/Layout';
import HomePageDesktop from '@/components/page/home-page/HomePage';
import HomePageMobile from '@/components-mobile/page/home-page/HomePage';
import Head from 'next/head';

function Page() {
  const router = useRouter();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const HomePage = isTabletOrMobile ? HomePageMobile : HomePageDesktop;

  // useEffect(() => {
  //     router.push('https://jsx.masterdiskon.com/welcome/construction');
  // }, [isTabletOrMobile]);

  return (
    <>
      <Head>
        <title>Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023</title>
        <meta
          name="description"
          content="Masterdiskon.com - Cari tiket pesawat dan Hotel Promo dan Diskon Spesial 2023"
        />
      </Head>
      <HomePage />
    </>
  );
}

Page.Layout = { desktop: DesktopLayout, mobile: MobileLayout };
export default Page;
