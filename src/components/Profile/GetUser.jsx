import { useState, useEffect } from "react";
import View from "./View";

function GetUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + localStorage.getItem("@TokenUser"),
      },
    };

    console.log(options);

    let response = await fetch(
      "https://social-network-api.osc-fr1.scalingo.io/gamer-verse/user",
      options
    );

    console.log("response:", response);

    let data = await response.json();

    console.log(data);

    setUser(data);
  };

  console.log("user:", user);
  console.log(user.firstname);

  const renderProfil = () => {
    return user.map((element, index) => {
      return (
        <div key={index}>
          <View
            lastname={element.lastname}
            firstname={element.firstname}
            email={element.email}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div id="test">{renderProfil()}</div>
    </>
  );
}

export default GetUser;
