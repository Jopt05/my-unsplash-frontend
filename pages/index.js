import Head from 'next/head'
import Image from 'next/image'
import Body from '../components/body'
import Header from '../components/header'
import Popup from '../components/popup'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {

  const [usePopup, setUsePopup] = useState(false);
  const [popUpAction, setpopUpAction] = useState('none');
  const [images, setImages] = useState([]);
  const [idImage, setidImage] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/images/1`, {
        headers: {
          "Authorization": "Token cd1377077027a14b56130e0daf2e486b65f1486f"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        setImages(response)
      })
      .catch(err => err)
  }, [usePopup])

  return (
    <div className={styles.container}>
      <Head>
        <title>My Unsplash</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div 
        className={`${styles.Curtain} ${usePopup ? styles.Curtain_on : ''}`}
        onClick={(e) => setUsePopup(false)}
      >
      </div>
      <Header 
        data={{
          setUsePopup,
          setpopUpAction
        }}
      />
      <Body 
        data={{
          setUsePopup,
          setpopUpAction,
          images,
          setidImage
        }}
      />
      <Popup 
        data={{
          usePopup,
          setUsePopup,
          popUpAction,
          idImage
        }}
      />
    </div>
  )
}
