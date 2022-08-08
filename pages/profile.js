import Image from 'next/image'
import Link from 'next/link'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { getUser } from "../src/graphql/queries";
import { createUser, updateUser } from "../src/graphql/mutations";
import { withSSRContext } from "aws-amplify";

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

const Profile = ({ user, error, mode }) => {
    const [firstName, setFirstName] = useState(mode === 'EDIT' ? user.firstName : '');
    const [secondName, setSecondName] = useState(mode === 'EDIT' ? user.lastName : '');
    const [description, setDescription] = useState(mode === 'EDIT' ? user.description : '');
    const [address, setAddress] = useState(mode === 'EDIT' ? user.address : '');
    const [nic, setNic] = useState(mode === 'EDIT' ? user.nic : '');
    const [mobileNumber, setMobileNumber] = useState(mode === 'EDIT' ? user.mobileNumber : '');
    const [email, setEmail] = useState(mode === 'EDIT' ? user.email : '');
    const [distance, setDistance] = useState(mode === 'EDIT' ? user.distance : '');
    const [avgSpeed, setAvgSpeed] = useState(mode === 'EDIT' ? user.avgSpeed : '');
    const [calories, setCalories] = useState(mode === 'EDIT' ? user.calories : '');
    const [dob, setdob] = useState(mode === 'EDIT' ? user.dob : '');
    return (
        <div>
            <Navbar />
            <div className="justify-content-center bg-dark mt-5">
                <div className='container bg-dark'>
                    <div className='row bg-dark'>
                        <div className='col-lg-6 align-self-center'>
                            <div className='container'>
                                <div className='card text-light bg-dark border border-success border-2 rounded-3 mt-2 px-3 pt-4 pb-3 mb-5 pb-3'>
                                    <div className='row text-center'>
                                        <h3>PROFILE-OVERVEIW</h3>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <Image className="rounded-circle" src='/avatar.png' width={200} height={200} alt="error" />
                                        </div>
                                        <div className="col-6 align-self-center">
                                            <h3>{firstName} {secondName}</h3>
                                            <div className='row'>
                                                <div className='col align-self-center'>
                                                    <Link href='/edit-user'>
                                                        <button className="btn btn-primary">
                                                            Edit profile
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row pt-3 pb-3'>
                                        <div className='col-6 text-center'>
                                            <Link href="/edit-vehicle">
                                                <button className="btn btn-primary">Add Vehicle</button>
                                            </Link>
                                        </div>
                                        <div className='col-6 text-center'>
                                            <Link href="/edit-bicycle">
                                                <button className="btn btn-primary">Add Bicycle</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <hr />
                                        <div className="row">
                                            <div className="col-6">
                                                <label><b>DOB : </b></label>
                                            </div>
                                            <div className="col-6">
                                                <div className=''>{dob} </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <label><b>NUMBER : </b></label>
                                            </div>
                                            <div className="col-6">
                                                <div className=''>{mobileNumber} </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <label><b>NIC : </b></label>
                                            </div>
                                            <div className="col-6">
                                                <div className=''>{nic} </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <label><b>EMAIL : </b></label>
                                            </div>
                                            <div className="col-6">
                                                <div className=''>{email} </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <label><b>ADRESS : </b></label>
                                            </div>
                                            <div className="col-6">
                                                <div className=''>{address} {distance} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 align-self-center mt-3'>
                            <div className='container'>
                                <div className='card text-light bg-dark border border-success border-2 rounded-3 m-2 px-3 mb-5 pb-5'>
                                    <div className='row text-center pt-4'>
                                        <h3>WEEKLY REPORT</h3>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="">
                                            <div className=''>
                                                <div className="">
                                                    <div className="">
                                                        <div className='row p-3'>
                                                            <div className='text-center'> DISTANCE </div>
                                                            <h5 className="text-center">{distance}<span className=""> &#x1F6B2; KM</span></h5>
                                                            <progress value="{distance}" max="100"> {distance}% </progress>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div className="text-center">
                                                        <div className='row p-3'>
                                                            <div className='text-center'>  SPEED </div>
                                                            <h5 className="text-center">{avgSpeed}<span className="text-center"> &#x1F6B4; KM/H</span></h5>
                                                            <progress className='ml-4' value="{avgSpeed}" max="100"> {avgSpeed}% </progress>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div className="text-center">
                                                        <div className='row p-3'>
                                                            <div className='text-center'> CALORIES </div>
                                                            <h5 className="">{calories}<span className=""> &#128293; Cal   </span></h5>
                                                            <progress value="{calories}" max="100"> {calories}% </progress>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div className="text-center">
                                                        <div className='row p-3'>
                                                            <div className='text-center'> SPEND-TIME </div>
                                                            <h5 className=""><span className="">  &#9201; 00:00:00</span></h5>
                                                            <progress value="00" max="100"> % </progress>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Profile
