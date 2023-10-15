import React, { useState, useEffect } from "react";
import View from "./View";

function GetUser() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("@TokenUser"),
      },
    };

    console.log("options:", options);

    try {
      let response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/gamer-verse/user",
        options
      );

      console.log("response:", response);

      if (response.ok) {
        let data = await response.json();
        console.log("data: ", data);
        setUser(data);
      } else {
        console.error("Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    console.log("TEST1");
    getUser();
  }, []);

  return (
  <div className="profilInput">

  <h1 className="title">Profil</h1>

  <div className="choix">
      <select name="Plateforme" className="platform">
          <option value="Plateforme">Plateforme</option>
          <option value="playstation">Playstation</option>
          <option value="Xbox">Xbox</option>
          <option value="switch">Switch</option>
          <option value="Pc">PC</option>
      </select>
  </div>

  <div className="identity">
    <div>
    Nom: {user.firstname}
    </div>
    <div>
    Prénom :{user.firstname}
    </div>
  </div>

  <div className="mailInput">
  <div>
    Mail :{user.email}
    </div>
      <input type="password" name="passewordChange" className="Mdp" placeholder="Mot de passe"/>
  </div>
  </div>
  )

}

export default GetUser;
