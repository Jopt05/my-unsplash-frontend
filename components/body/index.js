import styles from './Body.module.css'

export default function Body(props) {

    return (
        <main className={styles.Body}>
            <div className={`${styles.Image_Container}`}>
                <img src='https://www.gettyimages.com.mx/gi-resources/images/500px/983703508.jpg' />
            </div>
        </main>
    )
}