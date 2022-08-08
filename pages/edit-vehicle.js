import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { createVehicle } from "../src/graphql/mutations";
import { API } from "@aws-amplify/api";
import { Auth } from "@aws-amplify/auth";
import Navbar from "./component/Navbar";
import Footer from './component/Footer'
import styles from '../styles/Edit-vehicle.module.css'
import Link from "next/link";



const EditUser = () => {
    const [model, setModel] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [numberPlate, setNumberPlate] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = async (event) => {
        console.log("Add vehicle")
        event.preventDefault();
        const currentUser = await Auth.currentAuthenticatedUser();
        try {
            const result = await API.graphql({
                query: createVehicle,
                variables: {
                    input: {
                        id: numberPlate,
                        model: model,
                        fuelType: fuelType,
                        numberPlate: numberPlate,
                        category: category,
                        ownerID: currentUser.attributes.sub
                    },
                },
            });
            console.log(result);
            window.location.href = "/profile";
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className={styles.body}>
            <Navbar />
            <div className="d-flex flex-column justify-content-center w-100 h-100 bg-dark mt-5 text-white">

                <h1 className="align-self-center">Add your vehicle details</h1>
                <Form className="w-50 align-self-center">
                    <Form.Group className="mt-2" controlId="model">
                        <Form.Label>Model Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={model}
                            placeholder="Enter Your vehicle model"
                            onChange={(event) => {
                                setModel(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="fuelType">
                        <Form.Label>Fuel Type</Form.Label>
                        <Form.Control
                            type="text"
                            value={fuelType}
                            placeholder="Enter Your vehicle fuel type"
                            onChange={(event) => {
                                setFuelType(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            value={category}
                            placeholder="Enter Your vehicle category"
                            onChange={(event) => {
                                setCategory(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="numberPlate">
                        <Form.Label>Numberplate number</Form.Label>
                        <Form.Control
                            type="text"
                            value={numberPlate}
                            placeholder="Enter Your vehicle numberplate number"
                            onChange={(event) => {
                                setNumberPlate(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <div className="row mt-4">
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