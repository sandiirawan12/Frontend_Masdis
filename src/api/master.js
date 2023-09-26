const masterApi = {
    getPayments: (token) => {
        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}master/payments`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    }
}

export default masterApi