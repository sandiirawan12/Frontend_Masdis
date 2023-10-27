const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://api.masterdiskon.com/v1/";

const masterApi = {
    getPayments: (token) => {
        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}master/payments`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    }
}

export default masterApi