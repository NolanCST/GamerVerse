import { useState } from "react";

function GetUserId() {
  const [userId, setUserId] = useState([]);

  const getUserId = async () => {
    let options = {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
        Authorization: "bearer" + localStorage.getItem("@TokenUser"),
      },
    };
    try {
      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/gamer-verse/Profil?limit=20",
        options
      );
  };
}

export default GetUserId;
