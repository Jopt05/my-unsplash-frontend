import styles from './Body.module.css'

export default function Body(props) {

    const { data } = props;

    async function handleDelete(e) {
        e.preventDefault();
        data.setUsePopup(true);
        data.setpopUpAction('d');
    }

    return (
        <main className={styles.Body}>
            {
                data.images.length > 0 && data.images.map((item,index) => (
                    <div
                        className={`${styles.Image_Container}`}
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
            }
        </main>
    )
}