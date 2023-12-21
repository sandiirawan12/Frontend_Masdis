const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://devapi.masterdiskon.com/v1/";
// const api_masterdiskon_com = process.env.NEXT_PUBLIC_API_URL || "https://api.masterdiskon.com/v1/";

const tokenApi = {
    tokenPublic:()=>{
        var urlencoded = new URLSearchParams();

        urlencoded.append("client_id", "MDIcid");
        urlencoded.append("client_secret", "MDIcs");  
        urlencoded.append("grant_type", "client_credentials");

        // eslint-disable-next-line no-undef
        return fetch(`${api_masterdiskon_com}auth/token`,{
            method:'post',
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            body:urlencoded
          });
    }
}

export default tokenApi