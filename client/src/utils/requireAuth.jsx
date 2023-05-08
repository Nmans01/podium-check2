import { A, Navigate } from "@solidjs/router";
import { decode, verify } from 'jsonwebtoken';

function requireAuth(Component, props) {

  const access_token = localStorage.getItem('accessToken');
  const refresh_token = localStorage.getItem('refreshToken');

  if (!refresh_token || !verifyToken(refresh_token)) return <Navigate to="/login" />;
  if (!access_token || !verifyToken(access_token)) refresh({ access_token, refresh_token });

  return <Component {...props} />;
}

function verifyToken(token) {
  return Date.now() >= decode(token).exp * 1000;
}

function refresh(tokens) {
  fetch(
    "http://localhost:3000/auth/refresh",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tokens)
    }
  ).then(
    response => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    }
  ).then(
    data => {
      // Store tokens in localStorage
      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);
    }
  ).catch(
    error => {
      console.log(error);
    }
  );
}

export default requireAuth;