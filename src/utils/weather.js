
export const fetchAccessToken = async()=> {
    const accessRequest = await fetch("https://api.srgssr.ch/oauth/v1/accesstoken?grant_type=client_credentials", {
        method: 'post', 
        headers: new Headers({
          'Authorization': `Basic ${btoa(process.env.REACT_APP_WEATHER_CONSUMER_KEY + ':' + process.env.REACT_APP_WEATHER_CONSUMER_SECRET)}`, 
        }), 
    })
    const accessResponse = await accessRequest.json()
    return accessResponse.access_token;
}

export const fetchWeather = async (method, accessToken, lat, long) => {
    try {
        const weatherRequest = await fetch(`https://api.srgssr.ch/forecasts/v1.0/weather/${method}?latitude=${lat}&longitude=${long}`, {
            method: 'GET',
            headers: new Headers({
            'Authorization': `Bearer ${accessToken}`,
            }), 
        })
        return await weatherRequest.json();
    } catch(error) {
        return null;
    }
  };
