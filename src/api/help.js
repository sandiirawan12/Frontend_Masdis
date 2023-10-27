const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://api.masterdiskon.com/v1/";

const helpApi = {
    getCategory: () => {
        return fetch(`${api_masterdiskon_com}help/categories`).then(res => res.json())
    },

    getTopics: () => {
        return fetch(`${api_masterdiskon_com}help/topics`).then(res => res.json())
    },
    
    getArticles: (id) => {
        return fetch(`${api_masterdiskon_com}help/articles/${id}`).then(res => res.json())
    }
}

export default helpApi;