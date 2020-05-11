class DataSource {
    static searchData(keyword) {
        return fetch(`https://api.thevirustracker.com/free-api?countryTotal=${keyword} `)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.countrydata) {
                    console.log(responseJson.countrydata)
                    return Promise.resolve(responseJson.countrydata);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;