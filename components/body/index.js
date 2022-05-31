import styles from './Body.module.css'

export default function Body(props) {

    return (
        <main className={styles.Body}>
            <div className={`${styles.Image_Container}`}>
                <div className={styles.Overlay}>
                </div>
                <button className={styles.Delete_Button}>
                    Delete
                </button>
                <img src='https://www.gettyimages.com.mx/gi-resources/images/500px/983703508.jpg' />
                <div className={styles.Image_Desc}>
                    <p>
                        Morbi consequat lorem ipsuma ada dasdasdasdasdasdadas
                    </p>
                </div>
            </div>
        </main>
    )
}