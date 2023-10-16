import React from "react";
import { Alert } from "@mui/material";

function LogoutAlert({ showLogoutAlert }) {
   return (
      showLogoutAlert && (
         <Alert variant="filled" severity="error">
            Vous vous êtes bien déconnecter.
         </Alert>
      )
   );
}

export default LogoutAlert;
