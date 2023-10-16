import React from "react";
import { Alert } from "@mui/material";

function SuccessAlert({ showSuccessAlert }) {
   return (
      showSuccessAlert && (
         <Alert variant="filled" severity="success">
            Vous êtes connecté.
         </Alert>
      )
   );
}

export default SuccessAlert;
