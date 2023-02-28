const REST_API_KEY = "09729369494d098558a6bbda51ec4a30";
const REDIRECT_URI = "http://localhost:3000/klogin";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
