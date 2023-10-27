import queryString from 'query-string'

const api_masterdiskon_com_apitrav = process.env.NEXT_PUBLIC_HOTELEX_API_URL || "https://api.masterdiskon.com/v1/apitrav/";

const filtersApi = {
    getFilters: (params) => {
        return fetch(`${api_masterdiskon_com_apitrav}booking/filter?${queryString.stringify(params)}`).then(res => res.json())
    }
}

export default filtersApi