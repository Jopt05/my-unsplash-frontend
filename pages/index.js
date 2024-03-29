import Head from 'next/head'
import Body from '../components/body'
import Header from '../components/header'
import Popup from '../components/popup'
import styles from '../styles/Home.module.css'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../components/appcontext'
import Router from 'next/router'

export default function Home() {
  const { userData, setUserData } = useContext(AppContext);

  const [usePopup, setUsePopup] = useState(false);
  const [popUpAction, setpopUpAction] = useState('none');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [idImage, setidImage] = useState([]);

  useEffect(() => {
    if (userData.username && userData.username != '') return;

    const ls = localStorage.getItem('cr');
    const _userData = JSON.parse(ls);
    
    if (!_userData || _userData.username) {
      Router.replace('/');
    };

    setUserData(_userData)
  }, [])

  useEffect(() => {
    if ( !userData ) {
      Router.replace('/login');
      return
    }

    setIsLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/images/${userData.id}`, {
        headers: {
          "Authorization": `Token ${userData.token}`
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        setImages(response);
        setIsLoading(false);
      })
      .catch(err => err)
  }, [usePopup, userData])

  return (
    <div className={styles.container}>
      <Head>
        <title>My Unsplash</title>
        <meta name="description" content="My unsplash by jopt05" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'/>
      </Head>

      <div 
        className={`${styles.Curtain} ${usePopup ? styles.Curtain_on : ''}`}
        onClick={(e) => setUsePopup(false)}
      >
      </div>
      <Header 
        data={{
          setUsePopup,
          setpopUpAction,
          userData
        }}
      />
      <Body 
        data={{
          setUsePopup,
          setpopUpAction,
          images,
          setidImage,
          isLoading
        }}
      />
      <Popup 
        data={{
          usePopup,
          setUsePopup,
          popUpAction,
          idImage,
          userData
        }}
      />
    </div>
  )
}