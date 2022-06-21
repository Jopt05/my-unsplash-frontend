import styles from '../styles/Login.module.css'
import Head from 'next/head'

export default function Login() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>My Unsplash | Login</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.Form}>
                <h1>My Unsplash</h1>
                <label>
                    Your name
                </label>
                <input />
                <label>
                    Email
                </label>
                <input />
                <label>
                    Password
                </label>
                <input />
                <label>
                    Confirm your password
                </label>
                <input />
            </main>
        </div>
    )
}