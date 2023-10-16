import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function GetUser() {
  const [user, setUser] = useState({});
  const [newfirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [editing, setEditing] = useState(false);

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

  const ModifProfil = async () => {
    let options = {
      method: "PUT",

      Headers: {
        "Content-Type": "application/json",
        Authorization:
          "bearer token " /* + localStorage.getItem("@TokenUser"), */,
      },

      Body: JSON.parse({
        firstname: String,
        lastname: String,
        email: String,
        age: Number,
        occupation: String,
      }),
    };

    const response = await fetch(
      "https://social-network-api.osc-fr1.scalingo.io/gamer-verse/user",
      options
    );

    const data = await response.json();

    console.log(data);

    setUser(data);
  };

  const handleSave = () => {
    setEditing(false);
  };

  useEffect(() => {
    console.log("TEST 2");
    ModifProfil();
  }, []);

  console.log("user :", user);

  return (
    <div className="profilInput">
      <h1 className="title">Profil</h1>

      {editing ? ( // Si l'édition est activée
        <div className="identity">
          <div className="getFirstName">
            Nom:{" "}
            <input
              type="text"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            />
          </div>

          <div className="getLastName">
            Prénom:{" "}
            <input
              type="text"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />
          </div>

          <button onClick={handleSave}>Sauvegarder</button>
        </div>
      ) : (
        <div className="identity">
          <div className="getFirstName">Nom: {user.firstname}</div>
          <div className="getLastName">Prénom: {user.lastname}</div>
          <button onClick={() => setEditing(true)}>Modifier</button>
        </div>
      )}

      <div className="mailInput">
        <div className="getEmail">Mail: {user.email}</div>
      </div>
    </div>
  );
}

export default GetUser;
