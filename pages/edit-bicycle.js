import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { createBicycle } from "../src/graphql/mutations";
import { API } from "@aws-amplify/api";
import { Auth } from "@aws-amplify/auth";
import Navbar from "./component/Navbar";
import styles from '../styles/Edit-bicycle.module.css'
import Link from "next/link";

const EditUser = () => {
    const [model, setModel] = useState('');
    //const [distance, setDistance] = useState('');
    const [category, setCategory] = useState('');
    const [registerNumber, setregisterNumber] = useState('');


    const submitHandler = async (event) => {
        console.log("Add Bicycle")
        event.preventDefault();
        const currentUser = await Auth.currentAuthenticatedUser();
        try {
            const result = await API.graphql({
                query: createBicycle,
                variables: {
                    input: {
                        id: registerNumber,
                        model: model,
                        //distance: distance,
                        category: category,
                        ownerID: currentUser.attributes.sub
                    },
                },
            });
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className={styles.body}>
            <div className="d-flex flex-column justify-content-center w-100 h-100 text-white">
                <Navbar />
                <h1 className="align-self-center">Add your bicycle</h1>
                <Form className="w-50 align-self-center">
                    <Form.Group className="mt-2" controlId="model">
                        <Form.Label>Model Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={model}
                            placeholder="Enter Your bicycle model"
                            onChange={(event) => {
                                setModel(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            value={category}
                            placeholder="Enter Your bicycle category"
                            onChange={(event) => {
                                setCategory(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mt-2" controlId="registerNumber">
                        <Form.Label>Register Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={registerNumber}
                            placeholder="Enter Your bicycle Register Number"
                            onChange={(event) => {
                                setregisterNumber(event.target.value);
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
        </div>
    );
};

export default EditUser;