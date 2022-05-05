// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export default function handler(req, res) {
  
  var login =  await axios({
    url: 'http://localhost:8081/auth',
    method: 'GET',
    timeout: 16000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',

      },
    login
    }).then(resp => {
        console.log(resp.data);
    }).catch(err => {
        console.error(err);
    });
  
}
