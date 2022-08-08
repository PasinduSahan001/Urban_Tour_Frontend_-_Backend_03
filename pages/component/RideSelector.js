import React, { useEffect, useState } from 'react'

const RideSelector = ({ pickup_0, pickup_1, dropoff_0, dropoff_1 }) => {
    const [ride_distance, set_ride_distance] = useState(0)

    console.log("RIDE:- pickup_code: ", pickup_0)
    // console.log("Ride:- dropoff_code: ", dropoff_cordinates)

    const get_distance = () => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${pickup_0},${pickup_1};${dropoff_0},${dropoff_1}?geometries=geojson&access_token=pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw`)
            // https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw
            // https://api.mapbox.com/directions/v5/mapbox/cycling/79.923272,06.851146;79.965234473,06.841388419?geometries=geojson&access_token=pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw
            .then(response => response.json())
            .then(data => {
                console.log(data)
                //console.log("waypoints:- ", data.waypoints[1].distance)
                try {
                    set_ride_distance(data.waypoints[1].distance)
                }
                catch (err) {
                    console.log(err);
                }

            })
    }

    useEffect(() => {
        console.log("userEffect_pickup_cordinates:- ", pickup_0)
        //get_distance(pickup_0, pickup_1, dropoff_0, dropoff_1);
    }, [])
    get_distance(pickup_0, pickup_1, dropoff_0, dropoff_1);
    let text_distance = ride_distance.toString(10)
    let distance = parseFloat(text_distance).toFixed(2)

    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <h5 className='text-center'>Distance:- {distance} KM</h5>
                </div>
                <div className='col-6 text-center'>
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Choose a ride
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item text-center">Bicycle</a></li>
                            <li><a className="dropdown-item text-center">Bus</a></li>
                            <li><a className="dropdown-item text-center">Train</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className=''>
                <div className="">
                    <div className='row text-center'>
                        <div className='text-center text-danger'>
                            {/* You are currently unable to locate a bicycle in the location you chose. since bicycles aren't available right now. */}
                        </div>
                    </div>
                    <div className='row'>
                        <table className="table  table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RideSelector
