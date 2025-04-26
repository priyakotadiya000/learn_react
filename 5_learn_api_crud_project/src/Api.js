// src/services/api.js
const BASE = import.meta.env.VITE_API_BASE;

export const sendOtp = async (email, csrfToken) => {
  return fetch(`${BASE}/auth/api/login/email/otp/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken,
      accept: "application/json",
    },
    body: JSON.stringify({ email }),
  });
};

export const validateOtp = async (email, otp) => {
  return fetch(`${BASE}/auth/api/login/email/otp/validate/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({ email, otp }),
  });
};

export const getUser = async (accessToken, csrfToken) => {
  return fetch(`${BASE}/auth/api/me/`, {
    method: "GET",
    headers: {
      "CAuthorization": `Bearer ${accessToken}`,
      "X-CSRFToken": csrfToken,
      accept: "application/json",
    },
  });
};

