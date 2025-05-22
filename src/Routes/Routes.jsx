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
import GroupDetailsPage from "../Pages/GroupDetailsPage";
import UpdateGroup from "../Pages/UpdateGroup";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
             loader:()=>fetch('http://localhost:3000/groups'),
            Component:HomeLayout,
        },
        {
            path:'/home',
            Component:Home
        },
        {
            path:'/allgroups',
            loader:()=>fetch('http://localhost:3000/groups'),
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
            path:'/group/:id',
            element:<PrivateRoutes>
                <GroupDetailsPage></GroupDetailsPage>
            </PrivateRoutes>
        },
        {
            path:'/group/:id',
            element:<PrivateRoutes>
                <UpdateGroup></UpdateGroup>
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
