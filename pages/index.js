import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './component/Navbar'
import Link from 'next/link'
import Map from './component/Map'
import Footer from './component/Footer'

export default function Home() {
  return (
    <div className="w-100 h-100 d-flex flex-column justify-content-start">
      <Head>
        <title>Profile App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className={styles.container}>
        <Map />
        <div className={styles.sub}>
          <div className='button'>
            <div className='row'>
              <div className='col-8 text-center mx-auto d-grid gap-1 mt-5'>
                <Link href="/search">
                  <button type="button" className="btn btn-outline-primary"><b>&#x1F5FA; GET-RIDE-DIRECTION</b></button>
                </Link>
              </div>
              <div className='col-6 text-center mx-auto d-grid gap-1 mt-4'>
                <h6 className='text-danger text-muted small'>You must first add at least one vehicle to your account before you click the Fuel button for the first time after registering.</h6>
                <Link href="/fuel">
                  <button type="button" className="btn btn-outline-danger"><b>&#x26FD; FUEL-AVAILABILTY</b></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
