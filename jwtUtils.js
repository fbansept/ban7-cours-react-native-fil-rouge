import { decode } from "base-64";

export const decodeJwt = (jwt) => {
  try {
    const base64Url = jwt.split(".")[1]; // Récupère le payload du jwt
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Convertit en base64 standard
    const jsonPayload = decodeURIComponent(
      decode(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Erreur lors du décodage du JWT:", e);
    return null;
  }
};
