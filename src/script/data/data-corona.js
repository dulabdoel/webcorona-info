//data global
fetch('https://coronavirus-19-api.herokuapp.com/all')
    .then((apidata) => {
        console.log(apidata)
        return apidata.json();
    })
    .then((coronadata) => {
        console.log(coronadata)
        const getData = coronadata;
        document.getElementById('positif').innerHTML = `<h5>${getData.cases}</h5>`
        document.getElementById('sembuh').innerHTML = `<h5>${getData.recovered}</h5>`
        document.getElementById('meninggal').innerHTML = `<h5>${getData.deaths}</h5>`
    })
    .catch((error) => {
        console.log(error);
    })


//data negara indonesia
fetch('https://coronavirus-19-api.herokuapp.com/countries/indonesia')
    .then((response) => {
        return response.json();
    })
    .then((indonesiaData) => {
        const getData = indonesiaData;
        document.getElementById("indopositif").innerHTML = `${getData.cases}`
        document.getElementById('indodeath').innerHTML = `${getData.deaths}`
        document.getElementById('indosembuh').innerHTML = `${getData.recovered}`
        document.getElementById("kasusaktif").innerHTML = `${getData.active}`
        document.getElementById('kasushari').innerHTML = `${getData.todayCases}`
        document.getElementById('kasusmati').innerHTML = `${getData.todayDeaths}`

    })
    .catch((error) => {
        console.log(error);
    })


//data all countries