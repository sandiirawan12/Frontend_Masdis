const metadataApi = {
    getIp: () => {
        return fetch('http://ipinfo.io').then(res => res.json())
    }
}

export default metadataApi;