import styles from './Body.module.css'
import { useContext, useEffect, useState } from 'react';
import AppContext from '../appcontext';

export default function Body(props) {
    const { filter } = useContext(AppContext);

    const { data, isLoading } = props;

    useEffect(() => {
        console.log(data.images)
    }, [data.images])

    async function handleDelete(e) {
        e.preventDefault();
        data.setUsePopup(true);
        data.setpopUpAction('d');
    }

    return (
        <main className={`${styles.Body} ${ data.images.length < 1 ? styles.Body_Empty : '' }`}>
            {
                isLoading == true && <div className={styles.Loader_div}>
                    <img src='/loader.svg'></img>
                </div>
            }
            {
                (isLoading == false && data.images.length > 0) 
                    ? data.images.map((item,index) => (
                        <div
                            className={`${styles.Image_Container} ${ item.label.toLowerCase().includes( filter.toLowerCase() ) ? '' : styles.Image_Container_Hidden }`}
                            key={index}
                        >
                            <div className={styles.Overlay}>
                            </div>
                            <button 
                                className={styles.Delete_Button}
                                onClick={(e) => {
                                    handleDelete(e);
                                    data.setidImage(item.id)
                                }}
                                >
                                Delete
                            </button>
                            <img src={item.url} />
                            <div className={styles.Image_Desc}>
                                <p>
                                    {item.label}
                                </p>
                            </div>
                        </div>))
                    : <div className={styles.Placeholder}>
                        <p>No tienes imágenes</p>
                    </div>
            }
        </main>
    )
}