
const appID = '286505639148383';
const appSecret = 'e458ab995b966696ec6fe183ed1cfd33';
const redirectUri = 'https://lechuckie.github.io/';
const code = 'AQA9x3fWpiTBj5l0Xfz5oQI-ih-uLv4h5waA9S5nCd6QHLGyUwG87_VFBqkGyLDHS7vOY_3NdKf6y5_vReXgo_yDsma9W7cwnH07Yq4Wg5HfKTZenVXQIVzG7ycpbsktSqjKpo60-X8GHV5gFol-7CxVmrOV6TR-EdUT1dcs3HnD5es9dNC9oyA7vJD4yDHn89xduzl-KTJO60AZ0pX5vj8rBlBNFq2VjwoYUCdKb7xKRg';
const url = 'https://api.instagram.com/oauth/access_token';

url = `${url}?client_id=${appID}&client_secret=${appSecret}&grant_type=authorization_code&redirect_uri=${redirectUri}&code=${code}`


const xhr = new XMLHttpRequest;
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};
xhr.open('POST',url);
xhr.send(data);

xhr.onload = () => {
    console.log(xhr.response);