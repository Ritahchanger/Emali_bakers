# Emali Bakers - Online Food Delivery App for Factories

## Project Overview

**Emali Bakers** is an online food delivery system built to automate the process of ordering and delivering products (like bread and snacks) to retailers across the country. This system is designed to simplify the interaction between factories and retailers by allowing small retailers to place orders online, track their deliveries, and make payments securely. Drivers will handle the delivery of the products using lorries, motorbikes, or pickups but will no longer handle payments.

The retailers can pay for their orders using secure online payment gateways such as Daraja API (M-Pesa) or Stripe. The system ensures transparency, accountability, and efficiency in the ordering and delivery process. **Firebase** is used to store product images for display in the product catalog.

## Features

- **Retailer Registration/Login**: Retailers can sign up and log in to place their orders.
- **Product Catalog**: Displays a list of available products (with images stored in Firebase) for retailers to browse and add to their cart.
- **Order Management**: Retailers can place and track orders online.
- **Payment Integration**: Secure payments through Daraja API (M-Pesa) or Stripe.
- **Delivery Management**: Drivers are assigned orders for delivery, and delivery statuses are tracked.
- **Admin Dashboard**: Admins can manage products, view orders, monitor delivery progress, and upload product images to Firebase.
- **Real-time Notifications**: Retailers receive notifications when their orders are updated or delivered.
- **Secure Authentication**: Utilizes JWT tokens for secure user authentication.

## Tech Stack

- **Frontend**: React, Redux Toolkit, Axios, TailwindCSS
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Payment Gateways**: Daraja API (M-Pesa), Stripe
- **Image Storage**: Firebase for product image storage
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Heroku/Netlify
- **Version Control**: Git, GitHub

## Project Status

The system is still under development, and additional features are being implemented.

## Running the Available Features Locally

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ritahchanger/Emali_bakers.git
   cd Emali_bakers

2. **Install dependencies:**

### for client
cd client
npm install

### server
cd ../server
npm install

2. **For environment variables:**

`create a .env file in the server folder and add the following `

`MONGO_URI=mongodb://127.0.0.1:27017/emali_bakers`
`JWT_SECRET=your_jwt_secret`
`PORT=5000`
`MPESA_CONSUMER_KEY=your_mpesa_consumer_key`
`MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret`
`STRIPE_SECRET_KEY=your_stripe_secret_key`
`FIREBASE_CREDENTIALS=your_firebase_credentials`

3. **Run the application:**
inside the client folder run `npm run start`
inside the backend folder run `npm run dev`
