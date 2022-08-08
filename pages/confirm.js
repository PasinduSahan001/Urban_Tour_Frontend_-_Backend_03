import React from 'react'
import Map from './component/Map'
import styles from '../styles/Confirm.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RideSelector from './component/RideSelector'
import Link from 'next/link'

import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Nav } from 'react-bootstrap'

const Confirm = () => {
  const router = useRouter()
  const { pickup, dropoff } = router.query

  //console.log("Pickup: ", pickup)
  //console.log("dropoff: ", dropoff)

  const [pickup_cordinates, set_pickup_cordinates] = useState([0, 0])
  const [dropoff_cordinates, set_dropoff_cordinates] = useState([0, 0])
  const [pickup_lat, set_pickup_lat] = useState()
  const [pickup_lag, set_pickup_lag] = useState()
  const [dropoff_lat, set_dropoff_lat] = useState()
  const [dropoff_lag, set_dropoff_lag] = useState()


  const get_pickup_cordinates = (pickup) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw",
        limit: 1
      })
    )
      .then(response => response.json())
      .then(data => {
        console.log("Pickup_cordinates:- ", data.features[0].center)
        set_pickup_cordinates(data.features[0].center)
        set_pickup_lat(data.features[0].center[0])
        set_pickup_lag(data.features[0].center[1])
      })
  }

  const get_dropoff_cordinates = (dropoff) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw",
        limit: 1
      })
    )
      .then(response => response.json())
      .then(data => {
        console.log("TESTING DROOPOFF:- ", data)
        console.log("Dropoff_cordinates####:- ", data.features[0].center)
        set_dropoff_cordinates(data.features[0].center)
        set_dropoff_lat(data.features[0].center[0])
        set_dropoff_lag(data.features[0].center[1])
      })
  }

  useEffect(() => {
    get_pickup_cordinates(pickup);
    get_dropoff_cordinates(dropoff);
  }, [pickup, dropoff])
  let pick_00 = pickup_cordinates[0]
  //console.log("TYPEOF:- ", typeof pickup_cordinates[0])
  let text = pick_00.toString(10);
  let number = parseFloat(text)


  var v2 = number
  // 79.923272,06.851146;79.965234473,06.841388419
  var pickup_0 = pickup_lat
  var pickup_1 = pickup_lag
  var dropoff_0 = dropoff_lat
  var dropoff_1 = dropoff_lag
  console.log("TYPEOF:- ", typeof text)



  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <div className='row'>
          <h2>-Start Your Journey-</h2>
        </div>
        <div className={styles.container}>
          <Map pickup_cordinates={pickup_cordinates} dropoff_cordinates={dropoff_cordinates} />
          <hr />
          <div className={styles.ride_container}>
            <div className='row'>
              <div className='text-center'>
                {pickup} to {dropoff}
              </div>
            </div>
            <div className='row'>
              <div className={styles.ride_selector}>
                <RideSelector pickup_0={pickup_lat} pickup_1={pickup_lag} dropoff_0={dropoff_lat} dropoff_1={dropoff_lag} />
              </div>
            </div>

            <div className='row mt-4'>
              <button type="button" className="btn btn-outline-primary disabled"><b>&#9055; START! &#9055;</b></button>
            </div>
            <div className='row mt-3'>
              <Link href="/search">
                <button type="button" className="btn btn-outline-danger" value="reset"><b>&#128473; CANCEL &#128473;</b></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Confirm
