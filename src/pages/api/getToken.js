import tokenApi from "../../api/token";

export default async function handler(req, res) {
    const response = await tokenApi.tokenPublic();
    const token = await response.json();
    res.setPreviewData({token});
    res.end();
  }