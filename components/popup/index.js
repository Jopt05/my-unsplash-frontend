import styles from './Popup.module.css'

export default function Popup(props) {


    return (
        <div className={styles.Popup}>
            <h1 className={styles.Title}>
                Title
            </h1>
            <div className={styles.InputContainer}>
                {/* <label htmlFor='label'>
                    Label
                </label>
                <input
                    type='text'
                    placeholder='Set your label here'
                />
                <label htmlFor='url'>
                    Photo URL
                </label>
                <input
                    type='text'
                    placeholder='Set the url here'
                /> */}
                <label htmlFor='pass'>
                    Password
                </label>
                <input
                    type='password'
                    placeholder='Your password'
                />
            </div>
            <div className={styles.ButtonContainer}>
                <button
                    className={styles.Cancel}
                >
                    Cancel
                </button>
                {/* <button
                    className={styles.Red}
                >
                    Confirm
                </button> */}
                <button
                    className={styles.Green}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}