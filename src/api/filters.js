import queryString from 'query-string'

const filtersApi = {
    getFilters: (params) => {
        return fetch(`${process.env.NEXT_PUBLIC_HOTELEX_API_URL}booking/filter?${queryString.stringify(params)}`).then(res => res.json())
    }
}

export default filtersApi