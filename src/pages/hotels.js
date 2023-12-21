import Layout from "@/components/Layout";
import HotelPageDesktop from "@/components/page/HotelPage";
import HotelPageMobile from "@/components-mobile/page/HotelPage";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";
import React from "react";

function Page() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width:1224px)' })
    const HotelPage = isTabletOrMobile ? HotelPageMobile : HotelPageDesktop
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Booking hotel murah harga promo - Pesan kamar online sekarang di Masterdiskon.com</title>
                <meta content="Mau booking hotel murah dengan harga promo? Dapatkan berbagai pilihan hotel terbaik dan penginapan terdekat sesuai budget. Pesan hotel online sekarang hanya di Masterdiskon.com!" name="description" />
                <meta content="Booking Hotel Murah Harga Promo! Pesan Online Sekarang di Masterdiskon" property="og:title" />
                <meta content="Mau booking hotel murah dengan harga promo? Dapatkan berbagai pilihan hotel terbaik dan penginapan terdekat sesuai budget. Pesan hotel online sekarang hanya di Masterdiskon.com!" property="og:description" />
                <meta property="og:type" content="Website" />
                <meta property="og:url" content="https://masterdiskon.com/hotels" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Booking Hotel Murah Harga Promo! Pesan Online Sekarang di Masterdiskon" />
                <meta name="twitter:description" content="Mau booking hotel murah dengan harga promo? Dapatkan berbagai pilihan hotel terbaik dan penginapan terdekat sesuai budget. Pesan hotel online sekarang hanya di Masterdiskon.com!" />

            </Head>
            <HotelPage />
        </>
    )
}

Page.Layout = { desktop: Layout, mobile: React.Fragment }

export default Page
