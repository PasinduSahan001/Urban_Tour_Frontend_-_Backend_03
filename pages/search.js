import React from 'react'
import styles from '../styles/Search.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Form } from 'react-bootstrap'


const Search = () => {
    const [pickup, set_pickup] = useState("")
    const [dropoff, set_dropoff] = useState("")

    //console.log(pickup)
    //console.log(dropoff)

    return (
        <div>
            <title>
                Urban Tour/Search
            </title>
            <div className='bg-dark'>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.body}>
                        <div className='row text-center mt-4'>
                            <div className='col-2'>
                            </div>
                            <div className='col-8 mt-2'>
                                <div className={styles.container}>
                                    <h4 className={styles.title}>Request a ride with Urban Tour</h4>
                                    <Form>
                                        <input className={styles.input} placeholder="Choose your start location" value={pickup} onChange={(e) => set_pickup(e.target.value)} required />
                                        <input className={styles.input} placeholder="Choose your Destination " value={dropoff} onChange={(e) => set_dropoff(e.target.value)} required />
                                    </Form>
                                    <div className='row'>
                                        <Link href={{
                                            pathname: "/confirm",
                                            query: {
                                                pickup: pickup,
                                                dropoff: dropoff
                                            }
                                        }}>
                                            <button type="button" className="btn btn-outline-primary"><b>Check Your Ride</b></button>
                                        </Link>
                                    </div>
                                    <div className='row mt-4'>
                                        <Link href="/">
                                            <button type="button" className="btn btn-outline-danger"><b>&#10237; BACK</b></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-2'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search