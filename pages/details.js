import React, { useState } from "react";
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
    console.log("Details")
    console.log(station)
    const [fuelStationName, setFuelStationName] = useState('');
    const [locationCordinates, setLocationCordinates] = useState('');

    return (
        <div className="d-flex flex-column justify-content-center w-100 h-100">
            <Navbar />
            <h1>{fuelStationName}</h1>
        </div>
    );
};

export default EditUser;