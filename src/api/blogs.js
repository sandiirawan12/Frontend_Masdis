import queryString from 'query-string';

const blogsApi = {
    getBlogs: (token, options) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}promotion/blog?${queryString.stringify(options)}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },

    getBlog: (token, slug) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}promotion/blog/${slug}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    },
    
    getCategory: (token) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}promotion/blog/category`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => res.json())
    }
}

export default blogsApi;
