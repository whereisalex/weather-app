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

export const fetchGeolocationByZipCode = async(accessToken, zip) => {
    try {
        const weatherRequest = await fetch(`https://api.srgssr.ch/srf-meteo/geolocationNames?zip=${zip}`, {
            method: 'GET',
            headers: new Headers({
            'Authorization': `Bearer ${accessToken}`,
            }), 
        }).catch(error => {return {error}}); 

        if(weatherRequest.error) {
            return weatherRequest;
        }
        return await weatherRequest.json();
    } catch(error) {
        return { error: { message: 'Error Fetching Data'}};
    }
}

export const forecastByGelocationId = async(accessToken, id) => {
    try {
        const forecastRequest = await fetch(`https://api.srgssr.ch/srf-meteo/forecast/${id}`, {
            method: 'GET',
            headers: new Headers({
            'Authorization': `Bearer ${accessToken}`,
            }), 
        }).catch(error => {return { error }}); 
        
        if(forecastRequest.error) {
            return forecastRequest;
        }

        return await forecastRequest.json();
    } catch(error) {
        return { error: { message: 'Error Fetching Data'}};
    }
}