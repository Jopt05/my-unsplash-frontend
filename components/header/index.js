import styles from './Header.module.css'

export default function Header(props) {

    const { data } = props;

    function handleAddPhoto(e) {
        data.setpopUpAction('a');
        data.setUsePopup(true);
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
            </div>

            <div className={styles.Input_Container}>
                <i className='bx bx-search-alt-2'></i>
                <input
                    type='text'
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