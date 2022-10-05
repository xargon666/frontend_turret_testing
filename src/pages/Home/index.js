import React from 'react';
import './style.css';

const Home = () => {
    return (<>
    <h1>Home page</h1>
    <Link to="/Home"><Home/></Link>
    <Link to="/GamePage"><Home/></Link>
    <Link to="/KudosPage"><Home/></Link>
    <Link to="/SettingsPage"><Home/></Link>
    </>)


}

export default Home;
