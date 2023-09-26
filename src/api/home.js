import queryString from 'query-string'

const homeApi = {
    getBlogs: (token, params) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}promotion/blog?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getGeocoder: (lat, lon) => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&types=premise&language=id&key=AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU`).then(res => res.json())
    },

    getCoupon: (token) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}promotion/coupon/active?coupon_type=unik`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getPromo: (token, params) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}promotion/promo?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getBestTenCity: (token) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/hotel/besttencity`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getHotelTerdekat: (lat, lon) => {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/hotel/hotelTerdekat?city=${area}&lat=${lat}&lon=${lon}`, {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}apitrav/booking/hotelTerdekat?lat=${lat}&lang=${lon}`).then(res => res.json())
    },
    
    searchHotelTerdekat: (token, search, lat, lon) => {
        // return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/hotel/hotelTerdekat?city=${area}&lat=${lat}&lon=${lon}`, {
        return fetch(`https://jsx.masterdiskon.com/tbuddy/nearBySearch?search=${search}&lat=${lat}&lang=${lon}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getPopularFlight: (token) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/flight/popular`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getBanner: (token) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}front/beranda/banner`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getAutocomplete: (token, params, lat, lng) => {
        const link = params.product === 'hotel' ? process.env.NEXT_PUBLIC_HOTELEX_API_URL : process.env.NEXT_PUBLIC_API_URL

        return fetch(`${link}booking/autocomplete?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getAutocompleteTrain: (token, params) => {
        return fetch(`${process.env.NEXT_PUBLIC_STAGING_URL}KAI/station/get-station?search=${params.q}`).then(res => res.json())
    }
}

export default homeApi