import React from 'react'
import Navbar from './component/Navbar'
import style from '../styles/Notifications.module.css'
const Notifications = () => {
    return (
        <div clasName={style.body}>
            <Navbar />
            <div className={style.body}>
                <div className='row mt-5 pt-3'>
                    <div className='text-center'>
                        Currently, you do not have any new notifications.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Notifications
