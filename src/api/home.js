import queryString from 'query-string'

const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://api.masterdiskon.com/v1/";
const staging_masterdiskon_com = process.env.NEXT_PUBLIC_STAGING_URL || " https://staging-api.masterdiskon.com/";
const api_masterdiskon_com_apitrav = process.env.NEXT_PUBLIC_HOTELEX_API_URL || "https://api.masterdiskon.com/v1/apitrav/";

const homeApi = {
    getBlogs: (token, params) => {
        return fetch(`${api_masterdiskon_com}promotion/blog?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getGeocoder: (lat, lon) => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&types=premise&language=id&key=AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU`).then(res => res.json())
    },

    getCoupon: (token) => {
        return fetch(`${api_masterdiskon_com}promotion/coupon/active?coupon_type=unik`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getPromo: (token, params) => {
        return fetch(`${api_masterdiskon_com}promotion/promo?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getBestTenCity: (token) => {
        return fetch(`${api_masterdiskon_com}product/hotel/besttencity`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getHotelTerdekat: (lat, lon) => {
        // return fetch(`${api_masterdiskon_com}product/hotel/hotelTerdekat?city=${area}&lat=${lat}&lon=${lon}`, {
        return fetch(`${api_masterdiskon_com}apitrav/booking/hotelTerdekat?lat=${lat}&lang=${lon}&limit=10`).then(res => res.json())
    },

    getHotelTerdekatCard: (lat, lon) => {
        // return fetch(`${api_masterdiskon_com}product/hotel/hotelTerdekat?city=${area}&lat=${lat}&lon=${lon}`, {
        return fetch(`${api_masterdiskon_com}apitrav/booking/hotelTerdekat?lat=${lat}&lang=${lon}&limit=2`).then(res => res.json())
    },
    
    searchHotelTerdekat: (token, search, lat, lon) => {
        // return fetch(`${api_masterdiskon_com}product/hotel/hotelTerdekat?city=${area}&lat=${lat}&lon=${lon}`, {
        return fetch(`https://jsx.masterdiskon.com/tbuddy/nearBySearch?search=${search}&lat=${lat}&lang=${lon}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getPopularFlight: (token) => {
        return fetch(`${api_masterdiskon_com}product/flight/popular`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getBanner: (token) => {
        return fetch(`${api_masterdiskon_com}front/beranda/banner`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getAutocomplete: (token, params, lat, lng) => {
        const link = params.product === 'hotel' ? api_masterdiskon_com_apitrav : api_masterdiskon_com

        return fetch(`${link}booking/autocomplete?${queryString.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getAutocompleteTrain: (token, params) => {
        return fetch(`${staging_masterdiskon_com}KAI/station/get-station?search=${params.q}`).then(res => res.json())
    }
}

export default homeApi