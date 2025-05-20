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
import PrivateRoutes from "./PrivateRoutes";
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
            element:<PrivateRoutes>
                <AllGroup></AllGroup>
            </PrivateRoutes>

        },
        {
            path:'/creategroup',
            element:<PrivateRoutes>
                <CreateGroup></CreateGroup>
            </PrivateRoutes>
        },
        {
            path:'/mygroups',
            element:<PrivateRoutes>
                <MyGroups></MyGroups>
            </PrivateRoutes>
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
