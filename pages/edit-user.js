import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { getUser } from "../src/graphql/queries";
import { createUser, updateUser } from "../src/graphql/mutations";
import { withSSRContext } from "aws-amplify";
import { API } from "@aws-amplify/api";
import { Auth } from "@aws-amplify/auth";
import Navbar from "./component/Navbar";
import Link from "next/link";
import Footer from './component/Footer'
import styles from '../styles/Edit-user.module.css'




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

const EditUser = ({ user, error, mode }) => {
    console.log("UserEdit")
    console.log(user)
    const [firstName, setFirstName] = useState(mode === 'EDIT' ? user.firstName : '');
    const [secondName, setSecondName] = useState(mode === 'EDIT' ? user.lastName : '');
    const [description, setDescription] = useState(mode === 'EDIT' ? user.description : '');
    const [address, setAddress] = useState(mode === 'EDIT' ? user.address : '');
    const [nic, setNic] = useState(mode === 'EDIT' ? user.nic : '');
    const [mobileNumber, setMbileNumber] = useState(mode === 'EDIT' ? user.mobileNumber : '');
    const [email, setEmail] = useState(mode === 'EDIT' ? user.email : '');
    const [dob, setdob] = useState(mode === 'EDIT' ? user.dob : '');
    const submitHandler = async (event) => {
        event.preventDefault();
        const currentUser = await Auth.currentAuthenticatedUser();
        try {
            const result = await API.graphql({
                query: mode === 'EDIT' ? updateUser : createUser,
                variables: {
                    input: {
                        id: currentUser.attributes.sub,
                        firstName: firstName,
                        lastName: secondName,
                        description: description,
                        address: address,
                        nic: nic,
                        dob: dob,
                        email: email,
                        mobileNumber: mobileNumber
                    },
                },
            });
            console.log(result);
            window.location.href = "/profile";

        } catch (err) {
            console.log(err);
        }
    };

    if (error) {
        return (
            <div>
                <Navbar />
                <h1>Something Went Wrong! Please Try Again Later.</h1>
            </div>
        );
    }
    return (
        <div className='bg-dark'>
            <title>
                Urban Tour/Edit
            </title>
            <Navbar />
            <div className="d-flex flex-column justify-content-center w-100 h-100 text-white">
                <h1 className="align-self-center">Edit User Details</h1>
                <Form className="w-50 align-self-center">
                    <Form.Group className="mt-2" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstName}
                            placeholder="Enter your First Name"
                            onChange={(event) => {
                                setFirstName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="secondName">
                        <Form.Label>Second Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={secondName}
                            placeholder="Enter your Second Name"
                            onChange={(event) => {
                                setSecondName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="dob">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control
                            type="date"
                            value={dob}
                            placeholder="Enter your date of birth"
                            onChange={(event) => {
                                setdob(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="nic">
                        <Form.Label>NIC</Form.Label>
                        <Form.Control
                            type="text"
                            value={nic}
                            placeholder="Enter your NIC number"
                            onChange={(event) => {
                                setNic(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="mobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={mobileNumber}
                            placeholder="Enter your mobile number with country code"
                            onChange={(event) => {
                                setMbileNumber(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            value={email}
                            placeholder="Enter your email address"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={address}
                            rows={3}
                            placeholder="Enter your Address"
                            onChange={(event) => {
                                setAddress(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <div className="row mt-4 pb-5">
                        <div className="col-6 text-center">
                            <button
                                type="submit"
                                onClick={submitHandler}
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                        <div className="col-6 text-center">
                            <Link href="/profile">
                                <a className="btn btn-danger" role="button">Cancel</a>
                            </Link>
                        </div>
                    </div>
                </Form>
            </div>
            <Footer />
        </div>
    );
};

export default EditUser;