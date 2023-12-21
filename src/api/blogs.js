import queryString from 'query-string';

const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://devapi.masterdiskon.com/v1/";
// const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://api.masterdiskon.com/v1/";

const blogsApi = {
    getBlogs: (token, options) => {
        return fetch(`${api_masterdiskon_com}promotion/blog?${queryString.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    getBlog: (token, slug) => {
        return fetch(`${api_masterdiskon_com}promotion/blog/${slug}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getCategory: (token) => {
        return fetch(`${api_masterdiskon_com}promotion/blog/category`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    }
}

export default blogsApi;
