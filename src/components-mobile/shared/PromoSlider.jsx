import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import shopApi from '@/api/shop';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { A11y, Navigation } from 'swiper';

function PromoSlider() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { access_token } = useSelector(state => state.token)

    useEffect(() => {
        setIsLoading(true)
        shopApi.getListPromo(access_token, { page: 1, limit: 10 }).then(res => {
            if (res.success) {
                setData(res.data)
                setIsLoading(false)
            }
        })
    }, [])



    return (
        <Swiper style={{ borderRadius: '15px' }} spaceBetween={5} modules={[Navigation, A11y]}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
            {data?.map(item => (
                <SwiperSlide style={{ width: '100%', height: '130px', position: 'relative' }}>
                    <Link href={`/promo/${item.slug}`}>
                        <Image src={item.image} objectFit='cover' layout='fill' />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PromoSlider;