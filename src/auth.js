import React from "react";
const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENTID = '4846a369f0134b9fbb9e6f9ced5547dd';
const REDIRECT_URI = "http://localhost:3000";
const scopes = ["user-top-read"]
export const LOGIN_URL= `${AUTH_URL}?client_id=${CLIENTID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join('%20')}&response_type=code&show_dialog=true`;

export default function Login() {
    return <div>Login</div>
}