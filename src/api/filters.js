import queryString from 'query-string'

const api_masterdiskon_com_trav = process.env.NEXT_PUBLIC_HOTELEX_API_URL || "https://devapi.masterdiskon.com/v1/apitrav/";
// const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://api.masterdiskon.com/v1/";

const filtersApi = {
    getFilters: (params) => {
        return fetch(`${api_masterdiskon_com_trav}booking/filter?${queryString.stringify(params)}`).then(res => res.json())
    }
}

export default filtersApi