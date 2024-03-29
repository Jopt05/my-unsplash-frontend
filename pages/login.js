import styles from '../styles/Login.module.css'
import Head from 'next/head'
import { useContext, useState } from 'react'
import Router from 'next/router'
import AppContext from '../components/appcontext'

export default function Login() {
    const { userData, setUserData } = useContext(AppContext)

    const [action, setAction] = useState('l');

    const [ErrorText, setErrorText] = useState('');

    const [Form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        const { target } = e;
        setForm({
            ...Form,
            [target.name]: target.value
        })
    }

    function checkEmptyFields(fields = []) {
        let emptyFields = []
        fields.forEach((field) => Form[field] == '' ? emptyFields.push(field) : '');

        if( emptyFields.length > 0 ) {
            setErrorText(`The ${emptyFields[0]} field is empty`);
            return false;
        };

        if(
            fields.includes('password2') &&
            Form['password2'] != Form['password']
        ) {
            setErrorText(`Passwords don't match`);
            return false;
        }

        setErrorText('')

        return true;
    }

    function handleRequestError(response) {
        let errorString = response.non_field_errors[0];
        setErrorText(errorString);
        return errorString;
    }

    async function handleLogin(e) {
        setIsLoading(true);
        e.preventDefault();
        const hasError = checkEmptyFields(['email', 'password'])
        if( !hasError ) return;
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}api/login/`, {
                method: 'POST',
                body: JSON.stringify({
                    username: Form.email,
                    password: Form.password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => response.json())
            .then((r) => {
                setIsLoading(false);
                return r;
            })
            .catch(err => err)
        
        if (response.non_field_errors) {
            const error = handleRequestError(response);
            return error;
        };

        const userData = {
            username: response.user,
            token: response.token,
            id: response.id
        };

        localStorage.setItem('cr', JSON.stringify(userData))
            
        setUserData(
            userData
        )

        Router.replace('/')
    }

    async function handleRegister(e) {
        e.preventDefault();
        const hasError = checkEmptyFields(['name', 'email', 'password', 'password2'])
        if( !hasError ) return;
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}api/users/`, {
                method: 'POST',
                body: JSON.stringify({
                    name: Form.name,
                    email: Form.email,
                    password: Form.password,
                    password2: Form.password2
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => response.json())
            .then(response => response)
            .catch(err => err)
        
        if (response.non_field_errors) {
            const error = handleRequestError(response);
            return error;
        };

        setAction('l')
    }
    
    return (
        <div className={styles.container}>
            <Head>
                <title>My Unsplash | Login</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <form className={styles.Form}>
                <h1>My Unsplash</h1>
                {
                    action == 'r' && (
                        <>
                            <label>
                                Your name
                            </label>
                            <input
                                onChange={handleChange}
                                name='name'
                            />
                        </>
                    )
                }
                <label>
                    Email
                </label>
                <input
                    onChange={handleChange}
                    name='email'
                />
                <label>
                    Password
                </label>
                <input
                    type='password'
                    onChange={handleChange}
                    name='password'
                />
                {
                    action == 'r' && (
                        <>
                            <label>
                                Confirm your password
                            </label>
                            <input
                                onChange={handleChange}
                                name='password2'
                                type='password'
                            />
                        </>
                    )
                }
                <p
                    className={`${styles.ErrorText} ${ ErrorText != '' ? styles.Show : '' }`}
                >
                    { ErrorText }
                </p>
                <div className={styles.BContainer}>
                    {
                        action == 'l' && ( 
                            <>
                                <span 
                                    className={styles.Register_button}
                                    onClick={(e) => setAction('r')}
                                >
                                    Dont have an account? Register!
                                </span>
                                <button
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </>
                        )
                    }
                    {
                        action == 'r' && (
                            <button
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                        )
                    }
                </div>
                <div className={`${styles.Loading_Container} ${isLoading && styles.Loading_Container_Active}`}>
                    <img src='/loader.svg'></img>
                </div>
            </form>
        </div>
    )
}