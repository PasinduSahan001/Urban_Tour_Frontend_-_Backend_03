import React, { useState } from "react";
import styles from '../styles/Fuel.module.css'
import Map from './component/Map'
import Link from 'next/link'
import Navbar from './component/Navbar'
import { getUser } from "../src/graphql/queries";
import { withSSRContext } from "aws-amplify";

import { fuelStation } from "./data/fuelStation";
import Footer from './component/Footer'


export async function getServerSideProps({ req, res }) {
  const { Auth, API } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    const response = await API.graphql({
      query: getUser,
      variables: { id: user.attributes.sub },
    });
    if (response.data.getUser) {
      return {
        props: {
          mode: "EDIT",
          user: response.data.getUser,
          error: false,
        },
      };
    } else {
      return {
        props: {
          mode: "ADD",
          error: false,
        },
      };
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        error: true,
      },
    };
  }
}



const Fuel = ({ user, mode }) => {
  const [vehicle, setVehicle] = useState(mode === 'EDIT' ? user.vehicles.items : '');
  const [type, set_Type] = useState([])


  return (
    <div>
      <Navbar />
      <div className='bg-dark'>
        <div className='row'>
          <div className='col-10'>
            <div className='mt-5 mx-3 p-2'>
              <Link href="/">
                <a className="btn btn-danger" role="button">&#128281;</a>
              </Link>
            </div>
          </div>
          <div className='col-2 mt-5 pt-2'>
            <div className="btn-group">
              <button type="button" className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Fuel type
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Petrol</a></li>
                <li><a className="dropdown-item">Diesel</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <Map type={type} />
          <div className={styles.sub}>
            <div className=''>
              <div className='row'>
                <div className='col-lg-6 text-center mx-auto mt-2 px-5'>
                  <div className="row">
                    <div className='text-center'>
                      Please select nearest fuel station
                    </div>
                    <hr />
                  </div>
                  <div className="row">
                    <div className="table-responsive">
                      <table className="table table-borderless text-white ">
                        <thead>

                        </thead>
                        <tbody>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col "><div className="text-success"> P92 </div></th>
                            <th scope="col "><div className="text-success"> P95</div></th>
                            <th scope="col "><div className="text-success"> D</div></th>
                            <th scope='col '><div className="text-success"> SD</div></th>

                          </tr>

                          {fuelStation.map((x, i) => <tr key={i}>
                            <td className='text-start text-wrap col-6'>{x.name}</td>
                            <td className='col-1'>{x.P92}</td>
                            <td className='col-1'>{x.P95}</td>
                            <td className='col-1'>{x.D}</td>
                            <td className='col-1'>{x.SD}</td>

                          </tr>)}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                <div className='col-lg-6 text-center mx-auto mt-2 px-5'>
                  <div className="row">
                    <div className='text-center'>
                      Please select your vehicle
                    </div>
                    <hr />
                  </div>
                  <div className="row">
                    <div className="table-responsive">
                      <table className="table table-borderless text-white ">
                        <tbody>
                          {user.vehicles.items.map((x, i) =>
                            <tr key={i}>
                              <td>{x.model}</td>
                              <td>{x.numberPlate}</td>
                              <td>{x.fuelType}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>


                </div>
              </div>
              <div className="row">
                <div className='col-lg-6 text-center mx-auto px-5'>
                  <div className="row">

                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Fuel
