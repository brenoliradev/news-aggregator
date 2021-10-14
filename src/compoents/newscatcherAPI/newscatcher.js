var axios = require("axios").default;

const newsCatcher = (subject, lang) => {
    const apiKey = process.env.REACT_APP_NEWSCATCHER_API_KEY;

    var options = {
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
        params: {q: subject, lang: lang, sort_by: 'relevancy', page: '1', media: 'True'},
        headers: {
            'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    };

    axios.request(options)
        .then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
    });
}


export default newsCatcher;