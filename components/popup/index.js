import styles from './Popup.module.css'
import { useState } from 'react'

export default function Popup(props) {

    const { data } = props;

    const [Form, setForm] = useState({
        password: '',
        label: '',
        url: '',
    })

    function handleCancel(e) {
        e.preventDefault();
        data.setUsePopup(false);
    }

    function handleChange(e) {
        const { target } = e;
        setForm({
            ...Form,
            [target.name]: target.value
        })
    }

    async function handleDelete(e){
        e.preventDefault()
        if (Form.password == '') return;

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}api/images/delete/${data.idImage}`, {
                method: 'DELETE',
                body: JSON.stringify({
                    password: Form.password
                }),
                headers: {
                    "Authorization": 'Token cd1377077027a14b56130e0daf2e486b65f1486f',
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => response.json())
            .then(response => response)
            .catch(err => err)

        console.log(response)
        if (response.msg.includes('correct')) return;

        data.setUsePopup(false);
    }

    async function handleAdd(e) {
        e.preventDefault()

        if (
            Form.label == '' ||
            Form.url == ''
        ) {return};

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}api/images/post/`, {
                method: 'POST',
                body: JSON.stringify({
                    label: Form.label,
                    url: Form.url,
                    author: "1"
                }),
                headers: {
                    "Authorization": 'Token cd1377077027a14b56130e0daf2e486b65f1486f',
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => response.json())
            .then(response => response)
            .catch(err => err)

        console.log(response)
        if (!response.uploaded_on) return;

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
                                onChange={handleChange}
                                type='text'
                                placeholder='Set your label here'
                                name='label'
                            />
                            <label htmlFor='url'>
                                Photo URL
                            </label>
                            <input
                                onChange={handleChange}
                                type='text'
                                name='url'
                                placeholder='Set the url here'
                            />
                        </>
                    )
                }
                {
                    data.popUpAction == 'd' && (
                            <>
                                <label htmlFor='pass'>
                                    Password
                                </label>
                                <input
                                    onChange={handleChange}
                                    type='password'
                                    placeholder='Your password'
                                    name='password'
                                />
                            </>
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
                            onClick={handleDelete}
                        >
                            Confirm
                        </button>
                    )
                }
                {
                    data.popUpAction == 'a' && (
                        <button
                            className={styles.Green}
                            onClick={handleAdd}
                        >
                            Submit
                        </button>
                    )
                }
            </div>
        </div>
    )
}