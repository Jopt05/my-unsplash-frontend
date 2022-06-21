import styles from './Body.module.css'

export default function Body(props) {

    const { data } = props;

    function handleDelete(e) {
        e.preventDefault();
        data.setUsePopup(true);
        data.setpopUpAction('d');
    }

    const images = [
        {
            url: "https://compass-ssl.xbox.com/assets/9c/94/9c944d9c-7ef1-4b46-9f68-9b02966d3993.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg",
            desc: "Halo 2"
        },
        {
            url: "https://as01.epimg.net/meristation/imagenes/2022/01/26/noticias/1643173239_136781_1643173261_noticia_normal.jpg",
            desc: "Halo 3"
        },
        {
            url: "https://sm.ign.com/ign_es/screenshot/default/analisis-halo-infinite_cjdd.jpg",
            desc: "Halo 4"
        },
        {
            url: "https://as01.epimg.net/meristation/imagenes/2021/08/29/noticias/1630225978_442376_1630226491_noticia_normal.jpg",
            desc: "Halo 5"
        },
        {
            url: "https://media.revistagq.com/photos/60f7e56e7e571e147267975a/2:3/w_720,h_1080,c_limit/d7d71318-7c6d-4083-8351-f9b0b1e39ff0.jpeg",
            desc: "Halo 6"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mLs3S5gY1UxS7WVGf-yeJ01oVBJTqfyAqw&usqp=CAU",
            desc: "Halo 7"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nk0qbPyEjr5yK4sDqgYD3vYc6b9TMuLN5A&usqp=CAU",
            desc: "Halo 8"
        },
    ]

    return (
        <main className={styles.Body}>
            {
                images.map((item,index) => (
                    <div className={`${styles.Image_Container}`}>
                        <div className={styles.Overlay}>
                        </div>
                        <button 
                            className={styles.Delete_Button}
                            onClick={handleDelete}
                            >
                            Delete
                        </button>
                        <img src={item.url} />
                        <div className={styles.Image_Desc}>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}