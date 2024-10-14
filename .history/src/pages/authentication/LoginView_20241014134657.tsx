
const Login = () => {

    return (
        <>
        Login
        </>
    )
};

export default Login;


import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import UsersList from "src/components/panel/userManagement/usersList";

const UsersListView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>User List</title>
      </Helmet>
      <Sidebar>
        <UsersList />
      </Sidebar>
    </>
  );
};

export default UsersListView;
