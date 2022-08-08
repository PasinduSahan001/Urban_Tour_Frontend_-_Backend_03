import React, { useState } from "react";
import styles from '../styles/Fuel.module.css'
import Map from './component/Map'
import Link from 'next/link'
import Navbar from './component/Navbar'
import { getUser } from "../src/graphql/queries";
import { withSSRContext } from "aws-amplify";
import Footer from './component/Footer'

const fuelStation_arr = [{
  name: "C.F. De Mel & Sons (CEYPETCO Lanka Fuel Filling Station)",
  cordinates: [79.8507024498247, 6.928805010711227],
  P92: "✅",
  P95: "✅",
  D: "❌",
  SD: "❌"

},
{
  name: "Rajagiriya Filling Station",
  cordinates: [79.89863542949045, 6.908857780368848],
  P92: "✅",
  P95: "✅",
  D: "❌",
  SD: "✅"
},
{
  name: "IOC Lanka Fuel Filling Station",
  cordinates: [79.86749463446658, 6.935112817167763,],
  P92: "❌",
  P95: "✅",
  D: "❌",
  SD: "✅"
},

{
  name: "H K S RANASINGHE (Lanka IOC Fuel Filling Station",
  cordinates: [79.85487010219421, 6.896753524151393],
  P92: "✅",
  P95: "✅",
  D: "✅",
  SD: "✅"
},
{
  name: "Battaramulla Fuel Station",
  cordinates: [79.91732418509156, 6.90308295962401],
  P92: "❌",
  P95: "✅",
  D: "❌",
  SD: "❌"
},
{
  name: "CEYPETCO Lanka Fuel Filling Station ",
  cordinates: [79.85744502280717, 6.889255017504663],
  P92: "❌",
  P95: "❌",
  D: "❌",
  SD: "❌"
},]

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
      <title>
        Urban Tour/Fuel
      </title>
      <Navbar />
      <div className='bg-dark px-3'>
        <div className='row'>
          <div className='col-8'>
            <div className=' mx-3'>
              <Link href="/">
                <a className="btn btn-danger" role="button">&#128281;</a>
              </Link>
            </div>
          </div>
        </div>
        <div className=''>
          <div className="row">
            <div className="">
              <Map type={type} />
            </div>
          </div>
          <div className="row">
            <div className={styles.sub}>
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
                            <th scope="col ">
                              <div className="text-success"> P92 </div>
                            </th>
                            <th scope="col ">
                              <div className="text-success"> P95</div>
                            </th>
                            <th scope="col ">
                              <div className="text-success"> D</div>
                            </th>
                            <th scope='col '>
                              <div className="text-success"> SD</div>
                            </th>
                          </tr>
                          {fuelStation_arr.map((x, i) =>
                            <tr key={i}>
                              <td className='text-start text-wrap col-6'>{x.name}</td>
                              <td className='col-1'>{x.P92}</td>
                              <td className='col-1'>{x.P95}</td>
                              <td className='col-1'>{x.D}</td>
                              <td className='col-1'>{x.SD}</td>
                            </tr>
                          )}
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Fuel