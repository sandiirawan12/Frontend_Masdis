import moment from 'moment';
import queryString from 'query-string';
import metadataApi from '@/api/metadata';

const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://api.masterdiskon.com/v1/";
const staging_masterdiskon_com = process.env.NEXT_PUBLIC_STAGING_URL || " https://staging-api.masterdiskon.com/";
const api_masterdiskon_com_apitrav = process.env.NEXT_PUBLIC_HOTELEX_API_URL || "https://api.masterdiskon.com/v1/apitrav/";

const shopApi = {
    submitIssued: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/confirmissued`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    getFlightProducts: (token, options, filters) => {
        const req = {
            ...options,
            pax: {
                adult: Number(options['adult']),
                child: Number(options['child']),
                infant: Number(options['infant']),
            }, filter: {
                airlines: [],
                direct: options['direct']
            }
        }
        return fetch(`${api_masterdiskon_com}booking/search`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json()).then(res => {
            if (res.success) {
                let options = res.data.options.filter(item => {
                    let indexOfTwo = filters.transit?.indexOf(2)
                    return filters.transit ? (filters.transit?.includes(item.filter.transit)) || (item.filter.transit >= filters.transit[indexOfTwo]) : true
                }).filter(item => {
                    return filters.departure_time ? filters.departure_time.split(',').reduce((prev, val) => {
                        let timeFilter = val.split('-')
                        const time = moment(item.filter.departure_time, 'hh:ss'),
                            after = moment(timeFilter[1], 'hh:ss'),
                            before = moment(timeFilter[0], 'hh:ss');
                        return time.isBetween(before, after) || time.isSame(after) || time.isSame(before) || prev
                    }, Boolean()) : item
                }).filter(item => {
                    return filters.arrival_time ? filters.arrival_time.split(',').reduce((prev, val) => {
                        let timeFilter = val.split('-')
                        const time = moment(item.filter.arrival_time, 'hh:ss'),
                            after = moment(timeFilter[1], 'hh:ss'),
                            before = moment(timeFilter[0], 'hh:ss');
                        return time.isBetween(before, after) || time.isSame(after) || time.isSame(before) || prev
                    }, Boolean()) : item
                }).filter(item => filters.facility ? filters.facility.split(',').reduce((a, c) => item.filter[c] && a, true)
                    : item).filter(item => filters.price ? item.filter.price >= filters.price.split(',')[0] && item.filter.price <= filters.price.split(',')[1] : item).filter(item => filters.airline_code ? filters.airline_code.split(',').includes((item.filter.airline_code)) : item)

                const optionsRt = res.data.optionsRt.filter(item => {
                    let indexOfTwo = filters.transit?.indexOf(2)
                    return filters.transit ? (filters.transit?.includes(item.filter.transit)) || (item.filter.transit >= filters.transit[indexOfTwo]) : true
                }).filter(item => {
                    return filters.departure_time ? filters.departure_time.split(',').reduce((prev, val) => {
                        let timeFilter = val.split('-')
                        const time = moment(item.filter.departure_time, 'hh:ss'),
                            after = moment(timeFilter[1], 'hh:ss'),
                            before = moment(timeFilter[0], 'hh:ss');
                        return time.isBetween(before, after) || time.isSame(after) || time.isSame(before) || prev
                    }, Boolean()) : item
                }).filter(item => {
                    return filters.arrival_time ? filters.arrival_time.split(',').reduce((prev, val) => {
                        let timeFilter = val.split('-')
                        const time = moment(item.filter.arrival_time, 'hh:ss'),
                            after = moment(timeFilter[1], 'hh:ss'),
                            before = moment(timeFilter[0], 'hh:ss');
                        return time.isBetween(before, after) || time.isSame(after) || time.isSame(before) || prev
                    }, Boolean()) : item
                }).filter(item => filters.facility ? filters.facility.split(',').reduce((a, c) => item.filter[c] && a, true)
                    : item).filter(item => filters.price ? item.filter.price >= filters.price.split(',')[0] && item.filter.price <= filters.price.split(',')[1] : item).filter(item => filters.airline_code ? filters.airline_code.split(',').includes((item.filter.airline_code)) : item)


                if (filters.statSort[filters.orderType])
                    options = options.sort((a, b) => parseInt(a?.filter?.[filters?.orderType]) > parseInt(b?.filter?.[filters?.orderType]) ? 1 : -1);
                else
                    options = options.sort((a, b) => parseInt(a?.filter?.[filters?.orderType]) > parseInt(b?.filter?.[filters?.orderType]) ? -1 : 1);

                return { ...res, data: { ...res.data, options, optionsRt } }
            }

            return res
        })
    },

    getTrainProducts: (token, options, filters) => {
        // Tanggal dalam format "DD-MM-YYYY" diubah menjadi "YYYY-MM-DD"
        const tanggalBerangkat = options['dateFrom'];
        const tanggalPecah = tanggalBerangkat.split('-');
        const hari = tanggalPecah[0];
        const bulan = tanggalPecah[1];
        const tahun = tanggalPecah[2];
        const tanggalBerangkatAkhir = tahun + '-' + bulan + '-' + hari;

        const tanggalPulang = options['dateTo'];
        const tanggalPecah1 = tanggalPulang.split('-');
        const hari1 = tanggalPecah1[0];
        const bulan1 = tanggalPecah1[1];
        const tahun1 = tanggalPecah1[2];
        const tanggalPulangAkhir = tahun1 + '-' + bulan1 + '-' + hari1;

        const req = {
            origin: options['from'],
            destination: options['to'],
            departure_date: tanggalBerangkatAkhir,
            return_date: tanggalPulangAkhir,
            direction: options['direct'],
            adult: Number(options['adult']),
            child: Number(options['child']),
            infant: Number(options['infant']),
            filter: {
                price_range: filters.price === undefined ? [0, 1500000] : [parseInt(filters.price.split(',')[0]), parseInt(filters.price.split(',')[1])],
                departure_time: filters.departure_time === undefined ? [] : filters.departure_time.split(','),
                class_name: filters.kelas === undefined ? [] : filters.kelas.split(','),
                train_name: []
            }
        }
        return fetch(`${staging_masterdiskon_com}KAI/station/search-station`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },

    getSelectTrainSchedule: (token, email, options, item, item2) => {
        // Tanggal dalam format "DD-MM-YYYY" diubah menjadi "YYYY-MM-DD"
        const tanggalBerangkat = options['dateFrom'];
        const tanggalPecah = tanggalBerangkat.split('-');
        const hari = tanggalPecah[0];
        const bulan = tanggalPecah[1];
        const tahun = tanggalPecah[2];
        const tanggalBerangkatAkhir = tahun + '-' + bulan + '-' + hari;

        const tanggalPulang = options['dateTo'];
        const tanggalPecah1 = tanggalPulang.split('-');
        const hari1 = tanggalPecah1[0];
        const bulan1 = tanggalPecah1[1];
        const tahun1 = tanggalPecah1[2];
        const tanggalPulangAkhir = tahun1 + '-' + bulan1 + '-' + hari1;

        const req = {
            email: email,
            origin: options['from'],
            destination: options['to'],
            departure_date: tanggalBerangkatAkhir,
            return_date: options['direct'] === "OW" ? "" : tanggalPulangAkhir,
            direction: options['direct'],
            adult: Number(options['adult']),
            child: Number(options['child']),
            infant: Number(options['infant']),
            data_schedule: item,
            data_schedule_return: options['direct'] === "OW" ? null : item2
        }
        return fetch(`${staging_masterdiskon_com}KAI/station/select-schedule`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },

    getDataSchedule: (id_schedule, email) => {
        return fetch(`${staging_masterdiskon_com}KAI/station/get-schedule?id_schedule=${id_schedule}&email=${email}`).then(res => res.json())
    },

    getFlightProduct: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/detail`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },

    getPaymentCategory: (token) => {
        return fetch(`${api_masterdiskon_com}order/payment/category`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    getFlightRepricing: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/repricing`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },

    getCountPrice: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/count`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },
    
    submitCheckout: (token, req) => {
        const baseUrl = req.product == 'hotel' ? api_masterdiskon_com_apitrav : api_masterdiskon_com

        return fetch(`${baseUrl}booking/checkout`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())

    },

    submitCheckoutTrain: (req) => {
        return fetch(`${staging_masterdiskon_com}KAI/booking/create-booking`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req)
        }).then(res => res.json())

    },
    
    cekCoupon: (token, req) => {
        const baseUrl = req.product == 'hotel' ? api_masterdiskon_com_apitrav : api_masterdiskon_com

        return fetch(`https://jsx.masterdiskon.com/voucher/makeotp?code=${req}`, {
            method: 'get',
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())

    },
    
    aktifCoupon: (token, code, otp) => {
        return fetch(`https://jsx.masterdiskon.com/voucher/aktifotp?code=${code}&otp=${otp}`, {
            method: 'get',
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getHotelProducts: (token, options, filters) => {
        const req = {
            ...options,
            product: 'hotel',
            "classFrom": '0',
            "classTo": '5',
            showDetail: false,
            pax: {
                "room": options.room,
                "adult": options.adult,
                "child": options.child,
                "infant": options.infant,
                "childAge": options.childAge
            }
        }
        let obj;
        Object.keys(filters).forEach((slug) => {
            if (slug === 'price') {
                const priceRange = filters[slug] ? filters[slug].split(',').map(item => Number(item)) : [0, 0];
                obj = { ...req.filter, priceFrom: priceRange[0], priceTo: priceRange[1] }
            } else if (slug !== 'orderType' && slug !== 'class' && slug !== 'reviews' && slug !== 'recomendedOnly' && slug !== 'amenities' && slug !== 'search') {
                obj = { ...req.filter, [slug]: Number(filters[slug]) };
            } else if (slug === 'class') {
                obj = { ...req.filter, [slug]: filters[slug] ? filters[slug].split(',').map(item => Number(item)) : [] };
            } else if (slug === 'reviews') {
                obj = { ...req.filter, [slug]: filters[slug] ? filters[slug].split(',').map(item => Number(item)) : [] };
            } else if (slug === 'recomendedOnly') {
                obj = { ...req.filter, [slug]: filters[slug] === 'true' };
            } else if (slug === 'amenities') {
                let amenities = filters[slug] == undefined ? [] : (req.filter.amenities ? req.filter.amenities.concat(filters[slug].split(',')) : filters[slug].split(','))
                obj = { ...req.filter, amenities }
            } else {
                obj = { ...req.filter, [slug]: filters[slug] };
            }
            req.filter = obj
        });

        return fetch(`${api_masterdiskon_com_apitrav}booking/search`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },
    
    getDetailHotel: (token, options) => {
        const req = {
            ...options,
            product: 'hotel',
            "classFrom": '0',
            "classTo": '5',
            showDetail: false, productDetail: options.productId,
            pax: {
                "room": options.room,
                "adult": options.adult,
                "child": options.child,
                "infant": options.infant,
                "childAge": options.childAge
            },
        }
        return fetch(`${api_masterdiskon_com_apitrav}booking/offerdetail`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },

    //////////////// VIA HOTEL \\\\\\\\\\\\\\\\\\\\
    getDetailHotelVia: (token, options) => {
        const req = {
            idHotel: options.productId, // '3000010029705', //
            dateFrom: options.dateFrom, //'19-04-2023', 
            dateTo: options.dateTo,  //"20-04-2023",Silahkan pilih ulang pesanan anda
        }
        return fetch(`https://jsx.masterdiskon.com/getRoomVia`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },

    getAvailHotelVia: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/prebook`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        }).then(res => res.json())
    },

    getPrebookHotelVia: (token, options) => {
        const req = {
            ...options,
            product: 'hotel',

        }
        return fetch(`${api_masterdiskon_com}booking/prebook`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },
    
    getCheckoutHotelVia: (token, options) => {
        return fetch(`${api_masterdiskon_com}booking/checkout?${queryString.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json())
    },

    submitCheckoutVia: (token, req) => {
        const baseUrl = req.product == 'hotel' ? api_masterdiskon_com_apitrav : api_masterdiskon_com

        return fetch(`${api_masterdiskon_com}booking/checkout`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())

    },
    //////////////// END VIA HOTEL \\\\\\\\\\\\\\\\\\\\

    getPrebookHotel: (token, options) => {
        const req = {
            ...options,
            product: 'hotel',

        }
        return fetch(`${api_masterdiskon_com_apitrav}booking/prebook`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify(req)
        }).then(res => res.json())
    },
    
    getCheckoutHotel: (token, options) => {
        return fetch(`${api_masterdiskon_com_apitrav}booking/checkout?${queryString.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(res => res.json())
    },
    
    getCategoryGeneralProduct: (token, params) => {
        return fetch(`${api_masterdiskon_com}product/category?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getGeneralProducts: (token, options, filters) => {
        let params = { ...options };
        Object.keys(filters).forEach((slug) => {
            let obj;
            if (slug === 'id_city' || slug === 'tag') {
                obj = { ...params, [`${slug}[]`]: filters[slug] ? filters[slug].split(',') : [] }
            } else if (slug === 'price') {
                obj = { ...params, price_from: filters[slug].split('-')[0], price_to: filters[slug].split('-')[1] }
            } else if (slug === 'sort') {
                obj = { ...params, order: filters[slug].split('-')[0], order_type: filters[slug].split('-')[1] }
            } else {
                obj = { ...params, [slug]: filters[slug] }
            }
            params = obj
        });

        return fetch(`${api_masterdiskon_com}product?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getGeneralProduct: (token, slug) => {
        return fetch(`${api_masterdiskon_com}product/${slug}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getCheckoutGeneralProduct: (token, options) => {
        return fetch(`${api_masterdiskon_com}booking/checkout?${queryString.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getTagCategory: (token, params) => {
        return fetch(`${api_masterdiskon_com}product/tag?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getFilterCity: (token) => {
        return fetch(`${api_masterdiskon_com}product/city`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    getFilterCity: (token) => {
        return fetch(`${api_masterdiskon_com}product/city`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    getListPromo: (token, options) => {
        return fetch(`${api_masterdiskon_com}promotion/promo?${queryString.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    getDetailPromo: (token, slug) => {
        return fetch(`${api_masterdiskon_com}promotion/promo/${slug}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    claimPromo: (token, req) => {
        return fetch(`${api_masterdiskon_com}promotion/coupon/claim`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json())
    },
    
    getReviews: (token, options) => {
        return fetch(`${api_masterdiskon_com}product/review?${queryString.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getReviewType: (token) => {
        return fetch(`${api_masterdiskon_com}product/review/type`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    addReview: (data, token) => {
        return fetch(`${api_masterdiskon_com}product/review`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(data)
        }).then(res => res.json())
    },
    
    getStore: (id, token) => {
        return fetch(`${api_masterdiskon_com}partner/store/${id}`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        }).then(res => res.json())
    },
    
    getProductByStore: (token, options) => {
        return fetch(`${api_masterdiskon_com}product?${queryString.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        }).then(res => res.json())
    },
    
    getTagEvent: (token, options) => {
        return fetch(`${api_masterdiskon_com}product/events/tag`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        }).then(res => res.json())

    },
    
    getEventSchedule: (token, param) => {
        return fetch(`${api_masterdiskon_com}product/events/schedule/${param}`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        }).then(res => res.json())

    },
    
    getAvailHotel: (token, req) => {
        return fetch(`${api_masterdiskon_com_apitrav}booking/avail`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
        }).then(res => res.json())
    },

    getVendorOffices: (token) => {
        return fetch(`${api_masterdiskon_com_apitrav}product/offices`, {
            method: 'get',
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getDetailVendorOffice: (token, id) => {
        return fetch(`${api_masterdiskon_com_apitrav}product/offices/${id}`, {
            method: 'get',
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())

    },
    
    getArenaByCategory: (token, slug) => {
        return fetch(`${api_masterdiskon_com}product/events/arena/${slug}`, {
            method: 'get',
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getTagArena: (token) => {
        return fetch(`${api_masterdiskon_com}product/events/tag-arena`, {
            method: 'get',
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
}

export default shopApi