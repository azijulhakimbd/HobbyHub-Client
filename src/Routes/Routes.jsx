import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../Pages/HomeLayout";
import AllGroup from "../Pages/AllGroup";
import CreateGroup from "../Pages/CreateGroup";
import MyGroups from "../Pages/MyGroups";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Components/Home";
import ErrorPage from "../Pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:HomeLayout,
        },
        {
            path:'/home',
            Component:Home
        },
        {
            path:'/allgroups',
            Component:AllGroup,

        },
        {
            path:'/creategroup',
            Component:CreateGroup,
        },
        {
            path:'/mygroups',
            Component:MyGroups,
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        }
    ]
  },
  {
    path:'/*',
    Component:ErrorPage
  }
]);
