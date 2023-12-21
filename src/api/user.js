import qs from 'query-string'
import moment from 'moment';

const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://devapi.masterdiskon.com/v1/";
const staging_masterdiskon_com = process.env.NEXT_PUBLIC_STAGING_URL || " https://staging-api.masterdiskon.com/";
const api_masterdiskon_com_apitrav = process.env.NEXT_PUBLIC_HOTELEX_API_URL || "https://devapi.masterdiskon.com/v1/apitrav/";
// const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://api.masterdiskon.com/v1/";
// const staging_masterdiskon_com = process.env.NEXT_PUBLIC_STAGING_URL || " https://staging-api.masterdiskon.com/";
// const api_masterdiskon_com_apitrav = process.env.NEXT_PUBLIC_HOTELEX_API_URL || "https://api.masterdiskon.com/v1/apitrav/";

const userApi = {
    getProfile: (token) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/profile?type=masterdiskon`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    updateProfile: (token, req) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/profile`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'put',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    submitIssued: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/confirmissued`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    submitInvoice: (token, req) => {
        return fetch(`${staging_masterdiskon_com}FRONTEND/invoice/create-invoice-jurnal`, {
            headers: { Authorization: `Bearer 4p1m4sd1spr0duct10nn3w`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json());

        // return fetch(`https://api.masterdiskon.com/v1/order/invoice`, {
        //     headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        //     method: 'post',
        //     body: JSON.stringify(req)
        // }).then(res => res.json());
    },

    submitInvoicexx: (token, req) => {
        return fetch(`https://jsx.masterdiskon.com/createInvoice`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    getListQuickpick: (token, options) => {
        const params = { ...options, };
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/quickpick?${qs.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getQuickpick: (token, options) => {
        const params = { ...options, type: 'user' };
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/quickpick/detail?${qs.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    addQuickpick: (token, req) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/quickpick`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }, method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    updateQuickpick: (token, req, id) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/quickpick/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }, method: 'put',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    getDetailQuickpick: (token, id) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/quickpick/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(res => res.json());
    },

    deleteQuickpick: (token, id) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/quickpick/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }, method: 'delete'
        }).then(res => res.json());
    },

    getListPurchase: (token, options) => {
        const params = { ...options, q: options.keyword }
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/purchase?${qs.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getListInvoice: (token, startdate, todate, keyword, iduser, status) => {
        return fetch(`${api_masterdiskon_com}order/invoice/dataAllInvoice?keyword=${keyword}&start_date=${startdate}&end_date=${todate}&status=${status}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            // body: urlencoded
        }).then(res => res.json());
    },

    getListFavourite: (token, options) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}product/favourite?${qs.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getListInbox: (token, options) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}user/notification?${qs.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getListReview: (token, options) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}product/review?${qs.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getListCoupon: (token, options) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}promotion/coupon/mycoupon?${qs.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getPrivateToken: (username, password) => {

        var urlencoded = new URLSearchParams();
        urlencoded.append("client_id", "MDIcid");
        urlencoded.append("client_secret", "MDIcs");
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        urlencoded.append("grant_type", "password");

        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}auth/token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded
        }).then(res => res.json());

    },

    getPrivateTokenCorp: (username, password) => {

        var urlencoded = new URLSearchParams();
        urlencoded.append("client_id", "MDB2BCID");
        urlencoded.append("client_secret", "MDB2BCS");
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        urlencoded.append("grant_type", "password");

        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}auth/login/b2b`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded
        }).then(res => res.json());

    },
    
    getCountries: () => {
        return fetch(`${api_masterdiskon_com}user/location/country`).then(res => res.json())
    },
    
    getPurchase: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/detail`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    uploadImage: (token, formData) => {
        return fetch(`${api_masterdiskon_com}order/createImageReview`, {
            method: 'post',
            body: formData,
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    getPurchaseAdmin: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/detail_admin`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    getInvoiceDetail: (token, req) => {
        return fetch(`${staging_masterdiskon_com}FRONTEND/invoice/data-invoice-jurnal`, {
            headers: { Authorization: `Bearer 4p1m4sd1spr0duct10nn3w`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req),
        }).then(res => res.json());
    },

    getSeatKAI: (token, req) => {
        return fetch(`${staging_masterdiskon_com}KAI/seat/data-seat-by-subclass`, {
            headers: {'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req),
        }).then(res => res.json());
    },

    getBookingDetailSeat: (token, kodeBooking) => {
        return fetch(`${staging_masterdiskon_com}KAI/booking/data-booking?booking_no=${kodeBooking}`, {
            headers: {'Content-Type': 'application/json' },
            method: 'post',
        }).then(res => res.json());
    },
    
    changePaymentMethod: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/payment`, {
            method: 'put',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())

    },
    
    register: (req) => {
        return fetch(`${api_masterdiskon_com}auth/register`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
    },
    
    setSeen: (token, id) => {
        return fetch(`${api_masterdiskon_com}user/notification/${id}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    addQuickpick: (token, req) => {
        return fetch(`${api_masterdiskon_com}user/quickpick`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    addProductFavourite: (token, req) => {
        return fetch(`${api_masterdiskon_com}product/favourite`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    forgotPassword: (email) => {
        return fetch(`${api_masterdiskon_com}auth/forgotpassword/${email}`).then(res => res.json())
    },
    
    resetPassword: (req) => {
        return fetch(`${api_masterdiskon_com}auth/resetpassword`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
    },
    
    deleteProductFavourite: (token, req) => {
        return fetch(`${api_masterdiskon_com}product/favourite`, {
            method: 'delete',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    createCancellation: (token, req) => {
        return fetch(`${api_masterdiskon_com}booking/cancel/create`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    verifyRegister: (req) => {
        return fetch(`${api_masterdiskon_com}auth/verify?${qs.stringify(req)}`).then(res => res.json())
    }
}

export default userApi;
