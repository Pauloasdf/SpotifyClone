import React from 'react';
import { loginUrl } from '../APIs/spotify.js';
import '../Styles/Login.css';

export default function Login() {
    return (
        <div className="login">
            <img 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            className="SpotifyLogo"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}