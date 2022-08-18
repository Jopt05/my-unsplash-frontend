import styles from './Body.module.css'
import { useContext, useEffect, useState } from 'react';
import AppContext from '../appcontext';

export default function Body(props) {
    const { filter } = useContext(AppContext)

    const [loading, setLoading] = useState(true);

    const { data } = props;

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
                data.images.length > 0 
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
                        </div>
                    ))
                    : <h1>No hay imágenes para mostrar</h1>
            }
        </main>
    )
}