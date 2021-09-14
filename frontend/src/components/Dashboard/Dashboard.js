import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { REDIRECT_FALSE, REMOVE_MESSAGE } from "../../redux/types/PostTypes";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import { fetchPosts } from "../../redux/asyncMethods/PostMethods";
const Dashboard = () => {
  const { redirect, message, loading } = useSelector((state) => state.PostReducer);
  const {user : {_id}} = useSelector((state) => state.AuthReducer)
  const {posts} = useSelector((state) => state.FetchPosts)
  const dispatch = useDispatch();
  console.log('ok', posts)
  useEffect(() => {
    if (redirect) {
      dispatch({ type: REDIRECT_FALSE });
    }
    if(message) {
      toast.success(message , {
        duration: 4000,
      });
      dispatch({ type: REMOVE_MESSAGE });
    }
    dispatch(fetchPosts(_id));
  }, []); // Showing post confirm message

  

  return (
    <>
      <Helmet>
        <title>Dashboard - Vital Blog</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            color: "green",
            fontSize: "1.5rem",
          },
        }}
      />
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
