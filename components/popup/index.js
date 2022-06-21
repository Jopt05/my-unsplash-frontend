import styles from './Popup.module.css'

export default function Popup(props) {

    const { data } = props;

    function handleCancel(e) {
        e.preventDefault();
        data.setUsePopup(false);
    }

    return (
        <div className={`${styles.Popup} ${ data.usePopup ? styles.Popup_on : '' }`}>
            <h1 className={styles.Title}>
                { data.popUpAction == 'a' && 'Add new photo' }
                { data.popUpAction == 'd' && 'Are you sure?' }
            </h1>
            <div className={styles.InputContainer}>
                {
                    data.popUpAction == 'a' && (
                        <>
                            <label htmlFor='label'>
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
                            />
                            <label htmlFor='pass'>
                                Password
                            </label>
                        </>
                    )
                }
                {
                    data.popUpAction == 'd' && (
                            <input
                            type='password'
                            placeholder='Your password'
                        />
                    )
                }
            </div>
            <div className={styles.ButtonContainer}>
                <button
                    className={styles.Cancel}
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                {
                    data.popUpAction == 'd' && (
                            <button
                            className={styles.Red}
                        >
                            Confirm
                        </button>
                    )
                }
                {
                    data.popUpAction == 'a' && (
                        <button
                            className={styles.Green}
                        >
                            Submit
                        </button>
                    )
                }
            </div>
        </div>
    )
}