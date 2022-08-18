import '../styles/globals.css'
import AppContext from '../components/appcontext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [userData, setUserData] = useState({
    token: '',
    id: '',
    username: ''
  })

  const [filter, setFilter] = useState('')

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        filter,
        setFilter
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
