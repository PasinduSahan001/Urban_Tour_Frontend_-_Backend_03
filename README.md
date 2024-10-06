![Logo](https://github.com/PasinduSahan001/Resources/blob/e72255b2280698c3477a729df7c0fb27b13bef18/Urban%20Tour/Logo_2-min.png)

## Project Overview
**Urban_Tour** is a group project developed in 2022 as part of our Cloud Computing - Mini Project module in our degree program. The project aimed at addressing transportation challenges during a fuel crisis in Sri Lanka. It provides a platform for users to rent bicycles 🚲 as an alternative means of transport, allowing them to navigate their surroundings more easily. Additionally, we implemented an automated fuel quota system to streamline access to limited fuel supplies ⛽. This system recognizes vehicle number plates and connects to government databases to manage fuel quotas efficiently.

### Group Members
- [Janith Hettiarachchi](https://github.com/JanithK27) 🧑‍💻
- [Rusitha Thennekoon](https://github.com/Rusitha28) 🧑‍💻
- [MSM.IFFATH HANA](https://github.com/iffathhana) 🧑‍💻
- [Kesara Lakpriya](https://github.com/42Kesara) 🧑‍💻
- [Pasindu Sahan](https://github.com/PasinduSahan001) 🧑‍💻

## Features
### Software
- 🔐 User registration and login with OTP verification.
- 🚴‍♂️ Bicycle availability information.
- ➕ Functionality to add bicycles and vehicles.
- 🗺️ Route planning that integrates MapBox to show start and end points, calculate distances, and display public transportation options.
- ⛽ Fuel availability details and the nearest fuel stations.
- 🖼️ Image recognition capabilities for identifying vehicle registration plates.

### Hardware
- Custom PCB attached to bicycles, featuring:
  - NodeMCU
  - LCD display
  - GPS Module
  - LDR and RGB indicator
- IoT connectivity to monitor bicycle status, current location, and user information.

### Technologies Used
- **Front-End Development:** HTML, CSS, JavaScript, Bootstrap, NEXT.js.
- **Back-End Development:** AWS (Amplify, Cognito, AppSync, DynamoDB, Route 53), GraphQL, MapBox.
- **Image Processing:** Python (OpenCV, NumPy).
- **Hardware Programming:** Arduino.

## Installation and Setup
Setting up the project is not straightforward due to the requirement of various APIs and configurations. Here’s a high-level overview:

1. **Install NPM dependencies**: Run `npm install`.
2. **Set up AWS CLI** and configure backend services.
3. **Create a user pool** using AWS Cognito.
4. **Obtain and configure the MapBox API**.
5. **Run the project**: After configuration, you can run the application using `npm run dev`.
6. Additional configurations may be needed due to the project's age (developed in 2022).

## Intended User Experience
The system was designed for easy navigation and efficient fuel management. Users could quickly register, find and rent bicycles, and manage fuel access seamlessly through an intuitive interface.

### Screenshots
Please refer to the included screenshots that showcase the software interface, hardware, and image processing results.

![Login Screenshot](https://github.com/PasinduSahan001/Resources/blob/549945999be7cd0890082bea324b2496c3fb05bf/Urban%20Tour/Screenshots/Login-min.png)

![Home Screenshot](https://github.com/PasinduSahan001/Resources/blob/549945999be7cd0890082bea324b2496c3fb05bf/Urban%20Tour/Screenshots/Home-min.png)

![Search Screenshot](https://github.com/PasinduSahan001/Resources/blob/549945999be7cd0890082bea324b2496c3fb05bf/Urban%20Tour/Screenshots/Search-min.png)

![Confirm Screenshot](https://github.com/PasinduSahan001/Resources/blob/549945999be7cd0890082bea324b2496c3fb05bf/Urban%20Tour/Screenshots/Confirm-min.png)

![Fuel Screenshot](https://github.com/PasinduSahan001/Resources/blob/549945999be7cd0890082bea324b2496c3fb05bf/Urban%20Tour/Screenshots/Fuel-min.png)

![Profile Screenshot](https://github.com/PasinduSahan001/Resources/blob/549945999be7cd0890082bea324b2496c3fb05bf/Urban%20Tour/Screenshots/Profile-min.png)

![Edit User Screenshot](https://github.com/PasinduSahan001/Resources/blob/549945999be7cd0890082bea324b2496c3fb05bf/Urban%20Tour/Screenshots/Edit%20User-min.png)

![PCB](https://github.com/PasinduSahan001/Resources/blob/37a56670d301226e5b7bfcf64e7d1a16448b8bd1/Urban%20Tour/PCB.jpg)

![Image Processing Screenshot](https://github.com/PasinduSahan001/Resources/blob/86c7a66b6804b8d1b925211540d4e38e35eaa26f/Urban%20Tour/Image%20Processing.png)

## Acknowledgements
🙏 We would like to thank our project advisor and everyone who supported us during the development process.

## Current Status
🚫 As of now, the project is not running, and the associated services have been stopped.

---
