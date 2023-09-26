import FlightPageMobile from "@/components-mobile/page/FlightPage";
import Layout from "@/components/Layout"
import FlightPageDesktop from "@/components/page/FlightPage"
import Head from "next/head"
import React from "react";
import { useMediaQuery } from "react-responsive"

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' });
    const FlightPage = isTabletOrMobile ? FlightPageMobile : FlightPageDesktop;
    return (<>
        <Head>
            <meta charSet="UTF-8" />
            <title>Harga Tiket Pesawat Promo - Cari & Pesan Online di Masterdiskon.com</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Pesan tiket pesawat murah di Masterdiskon. Cek harga tiket pesawat online dan dapatkan promo tiket pesawat terbaru. Booking mudah &amp; aman semua maskapai di sini!" />
            <meta property="og:title" content="Harga Tiket Pesawat Promo - Cari & Pesan Online di Masterdiskon.com" />
            <meta property="og:type" content="Website" />
            <meta property="og:url" content="https://masterdiskon.com/flights" />

        </Head>
        <FlightPage />
    </>
    )
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page
