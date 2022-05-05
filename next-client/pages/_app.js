import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import React, {useState} from "react"


function MyApp({ Component, pageProps }) {
  
  const [usersData, setUsersData] = useState(0);    //Esto por seguridad, sin encriptación o guardado no se hace
  
  return <Component {...pageProps} />

}


export default MyApp
