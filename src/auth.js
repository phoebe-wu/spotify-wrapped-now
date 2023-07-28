import React from "react";
const AUTH_URL = 'https://accounts.spotify.com/authorize';
export const CLIENTID = '4846a369f0134b9fbb9e6f9ced5547dd';
const REDIRECT_URI = "http://localhost:3000";
const scopes = ["user-top-read", "user-read-private", "user-read-email"]
export const LOGIN_URL= `${AUTH_URL}?client_id=${CLIENTID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export default function Login() {
    return (
        <div className="login-page">
        <div className="login-msg"> Discover your Spotify Wrapped Now </div>
        <a href={LOGIN_URL}>
          <div className="login-btn">LOGIN WITH SPOTIFY</div>
        </a>
      </div>
      );
}