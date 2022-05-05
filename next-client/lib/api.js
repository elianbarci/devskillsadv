import axios from 'axios'

export async function login() {

    console.log("Entro")

    var credentials = new URLSearchParams();
    credentials.append("username", "sarah");
    credentials.append("password", "connor");

    const res = await axios({
            url: 'http://127.0.0.1:8081/auth',
            method: 'GET',
            timeout: 16000,
            credentials,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencode',
                'Access-Control-Allow-Origin': '*'
            },

        })
        .catch(err => {

            if (err.response) {
                // client received an error response (5xx, 4xx)
                throw err
            } else if (err.request) {
                // client never received a response, or request never left
                console.log(err.request)
                throw err
            } else {
                // anything else
                throw err
            }

        })


    return res.data.token

}