const tokenApi = {
    tokenPublic:()=>{
        var urlencoded = new URLSearchParams();

        urlencoded.append("client_id", "MDIcid");
        urlencoded.append("client_secret", "MDIcs");  
        urlencoded.append("grant_type", "client_credentials");

        // eslint-disable-next-line no-undef
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/token`,{
            method:'post',
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            body:urlencoded
          });
    }
}

export default tokenApi