import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { createUser, updateUser } from "../src/graphql/mutations";
import { createFuelStation, updateFuelStation } from "../src/graphql/mutations";
import { API } from "@aws-amplify/api";
import { Auth } from "@aws-amplify/auth";
import Navbar from "./component/Navbar";
import { getFuelStation } from "../src/graphql/queries";
import { withSSRContext } from "aws-amplify";

export async function getServerSideProps({ req, res }) {
    const { Auth, API } = withSSRContext({ req });
    try {
        const user = await Auth.currentAuthenticatedUser();
        const response = await API.graphql({
            query: getFuelStation,
            variables: { id: user.attributes.sub },
        });

        if (response.data.getFuelStation) {
            return {
                props: {
                    mode: "EDIT",
                    station: response.data.getFuelStation,
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

const EditUser = ({ error, mode, station }) => {
    console.log("LOLZ")
    console.log(station)
    const [fuelStationName, setFuelStationName] = useState(mode === 'EDIT' ? station.fuelStationName : '');
    const [locationCordinates, setLocationCordinates] = useState(mode === 'EDIT' ? station.locationCordinates : '');
    //const [description, setDescription] = useState('');
    const submitHandler = async (event) => {
        event.preventDefault();
        const currentUser = await Auth.currentAuthenticatedUser();
        try {
            const result = await API.graphql({
                query: mode === 'EDIT' ? updateFuelStation : createFuelStation,
                variables: {
                    input: {
                        id: currentUser.attributes.sub,
                        fuelStationName: fuelStationName,
                        locationCordinates: locationCordinates,
                        //description: "description,"
                    },
                },
            });
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="d-flex flex-column justify-content-center w-100 h-100">
            <Navbar />
            <h1 className="align-self-center">Edit Station Details</h1>
            <Form className="w-50 align-self-center">
                <Form.Group className="mt-2" controlId="fuelStationName">
                    <Form.Label> Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fuelStationName}
                        placeholder="Enter Your First Name"
                        onChange={(event) => {
                            setFuelStationName(event.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group className="mt-2" controlId="secondName">
                    <Form.Label> Cordinates</Form.Label>
                    <Form.Control
                        type="text"
                        value={locationCordinates}
                        placeholder="Enter Your Cordinates"
                        onChange={(event) => {
                            setLocationCordinates(event.target.value);
                        }}
                    />
                </Form.Group>
                {/* <Form.Group className="mt-2" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={description}
                        rows={5}
                        placeholder="Enter Your Description"
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                    />
                </Form.Group> */}
                <button
                    type="submit"
                    onClick={submitHandler}
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default EditUser;