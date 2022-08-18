import styles from './Header.module.css'
import { useContext } from 'react';
import AppContext from '../appcontext';
import Router from 'next/router'

export default function Header(props) {
    const { filter, setFilter, setUserData } = useContext(AppContext)

    const { data } = props;

    function handleAddPhoto(e) {
        data.setpopUpAction('a');
        data.setUsePopup(true);
    }

    function handleLogOut(e) {
        localStorage.removeItem('cr');

        setUserData({
            token: '',
            id: '',
            username: ''
        })

        Router.replace('/login');
    }

    return (
        <header className={styles.Header}>
            <div className={styles.Logo_Container}>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <h1>My Unsplash</h1>
                    <p>{data.userData && data.userData.username}</p>
                </div>
                <div className={styles.Exit_Container}>
                    <i
                        className='bx bx-exit'
                        onClick={handleLogOut}
                    ></i>
                </div>
            </div>

            <div className={styles.Input_Container}>
                <i className='bx bx-search-alt-2'></i>
                <input
                    type='text'
                    value={filter}
                    onChange={ ((e) => setFilter(e.target.value)) }
                />
            </div>

            <div className={styles.Button_Container}>
                <button
                    className={styles.Button}
                    onClick={handleAddPhoto}
                >
                    Add a photo
                </button>
            </div>
        </header>
    )
}