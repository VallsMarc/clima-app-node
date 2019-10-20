const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '6c24ccd316msh55e0df621259cdfp17e6ccjsn1b389209d9a1' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return { // EcmaScript6 crea propietats! Em retorna el valor de les const!
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}