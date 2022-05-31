import styles from './Header.module.css'

export default function Header(props) {

    return (
        <header className={styles.Header}>
            <div className={styles.Logo_Container}>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <h1>My Unsplash</h1>
                    <p>jopt98@gmail.com</p>
                </div>
            </div>

            <div className={styles.Input_Container}>
                <i>A</i>
                <input
                    type='text'
                />
            </div>

            <div className={styles.Button_Container}>
                <button
                    className={styles.Button}
                >
                    Add a photo
                </button>
            </div>
        </header>
    )
}