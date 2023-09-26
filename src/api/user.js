import qs from 'query-string'
import moment from 'moment';

const userApi = {
    getProfile: (token) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/profile?type=masterdiskon`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    updateProfile: (token, req) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/profile`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'put',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    submitIssued: (token, req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}booking/confirmissued`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    submitInvoice: (token, req) => {
        return fetch(`https://api.masterdiskon.com/v1/order/invoice`, {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json());
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
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/quickpick?${qs.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getQuickpick: (token, options) => {
        const params = { ...options, type: 'user' };
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/quickpick/detail?${qs.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    addQuickpick: (token, req) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/quickpick`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }, method: 'post',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    updateQuickpick: (token, req, id) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/quickpick/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }, method: 'put',
            body: JSON.stringify(req)
        }).then(res => res.json());
    },

    getDetailQuickpick: (token, id) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/quickpick/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(res => res.json());
    },

    deleteQuickpick: (token, id) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/quickpick/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }, method: 'delete'
        }).then(res => res.json());
    },

    getListPurchase: (token, options) => {
        const params = { ...options, q: options.keyword }
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/purchase?${qs.stringify(params)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getListInvoice: (startdate, todate, keyword, iduser, status) => {
        var urlencoded = new URLSearchParams();
        urlencoded.append("start", "0");
        urlencoded.append("length", "-1");
        urlencoded.append("search[value]", keyword);
        urlencoded.append("search[regex]", "false");
        urlencoded.append("startdate", moment(startdate).format('YYYY-MM-DD').toString());
        urlencoded.append("todate", moment(todate).format('YYYY-MM-DD').toString());
        urlencoded.append("iduser", iduser);
        urlencoded.append("status", status);

        return fetch(`https://corporate.masterdiskon.com/api/corporate/document/invoice/getInvoiceB2B/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded
        }).then(res => res.json());
    },

    getListFavourite: (token, options) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/favourite?${qs.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getListInbox: (token, options) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/notification?${qs.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getListReview: (token, options) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/review?${qs.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json());
    },

    getListCoupon: (token, options) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}promotion/coupon/mycoupon?${qs.stringify(options)}`, {
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
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/token`, {
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
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login/b2b`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded
        }).then(res => res.json());

    },
    
    getCountries: () => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/location/country`).then(res => res.json())
    },
    
    getPurchase: (token, req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}booking/detail`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    changePaymentMethod: (token, req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}booking/payment`, {
            method: 'put',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())

    },
    
    register: (req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/register`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
    },
    
    setSeen: (token, id) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/notification/${id}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    addQuickpick: (token, req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}user/quickpick`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    addProductFavourite: (token, req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/favourite`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    forgotPassword: (email) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/forgotpassword/${email}`).then(res => res.json())
    },
    
    resetPassword: (req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/resetpassword`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
    },
    
    deleteProductFavourite: (token, req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}product/favourite`, {
            method: 'delete',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    createCancellation: (token, req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}booking/cancel/create`, {
            method: 'post',
            body: JSON.stringify(req),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    verifyRegister: (req) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/verify?${qs.stringify(req)}`).then(res => res.json())
    }
}

export default userApi;
