import { useState, useEffect } from "react";
import View from "./View"

function GetUser() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@TokenUser"),
      },
    };

    console.log("option:", options);

    let response = await fetch(
      "https://social-network-api.osc-fr1.scalingo.io/gamer-verse/user",
      options
    );

    console.log("response:", response);

    let data = await response.json();

    console.log("data: ", data);

    setUser(data);
  };

  console.log("user:", user);


  useEffect(() => {
    console.log("TEST1");
    getUser();
  }, []);

 

  const renderProfil = () => {
    
    return user?.map((element, index) => {
        console.log("TEST2");
      return (
        <div key={index}>
          <View
            email={element.email}
            firstname={element.firstname}
            lastname={element.lastname}
          />
        </div>
      );
    });
  };

  return (
    <>
        {user.map && user.length > 0 ? (
        <div>{() => renderProfil()}</div>
        ) : (
        <p>Chargement en cours...</p>
        )}
    </>
);
}

export default GetUser;
