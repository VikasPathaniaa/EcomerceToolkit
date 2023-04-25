import React from "react";
import PagesRoute from "./Route/Route";
import Layout from "./Component/Layout";
import Login from "./Auth/Login";
import { useSelector } from "react-redux";
const App = () => {
  const { user } = useSelector((state) => state.LoginSlice);
  const { authUser } = user;
  console.log("login Slice ", user);
  return (
    <>
      {!authUser ? (
        <Login />
      ) : (
        <Layout>
          <PagesRoute />
        </Layout>
      )}
    </>
  );
};

export default App;
