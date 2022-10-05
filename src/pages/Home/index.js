import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
    <>
        <h1>Home page</h1>
        <Link to="/">Home</Link>
        <Link to="/GamePage">Game Page</Link>
        <Link to="/KudosPage">Kudos Page</Link>
        <Link to="/SettingsPage">Settings Page</Link>
    </>
    )
}

export default Home;
