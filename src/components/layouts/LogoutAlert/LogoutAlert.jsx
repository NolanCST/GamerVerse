function LogoutAlert({ showLogoutAlert }) {
   return showLogoutAlert && alert(confirm("Souhaitez-vous vous deconnectez ?"));
}

export default LogoutAlert;
