const helpApi = {
    getCategory: () => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}help/categories`).then(res => res.json())
    },

    getTopics: () => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}help/topics`).then(res => res.json())
    },
    
    getArticles: (id) => {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}help/articles/${id}`).then(res => res.json())
    }
}

export default helpApi;