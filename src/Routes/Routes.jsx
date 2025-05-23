import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import HomeLayout from "../Pages/HomeLayout";
import AllGroup from "../Pages/AllGroup";
import CreateGroup from "../Pages/CreateGroup";
import MyGroups from "../Pages/MyGroups";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import GroupDetailsPage from "../Pages/GroupDetailsPage";
import UpdateGroup from "../Pages/UpdateGroup";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("https://b11-a10-papaya-server.vercel.app/groups/"),
        Component: HomeLayout,
      },
      {
        path: "/allgroups",
        loader: () => fetch("https://b11-a10-papaya-server.vercel.app/groups/"),
        element: (
          <PrivateRoutes>
            <AllGroup></AllGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "/creategroup",
        element: (
          <PrivateRoutes>
            <CreateGroup></CreateGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mygroups",
        loader: () => fetch("https://b11-a10-papaya-server.vercel.app/groups/"),
        element: (
          <PrivateRoutes>
            <MyGroups></MyGroups>
          </PrivateRoutes>
        ),
      },
      {
        path: "/group/:id",
        loader: ({ params }) =>
          fetch(`https://b11-a10-papaya-server.vercel.app/groups/${params.id}`),
        element: (
          <PrivateRoutes>
            <GroupDetailsPage></GroupDetailsPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateGroup/:id",
        loader: ({ params }) =>
          fetch(`https://b11-a10-papaya-server.vercel.app/groups/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateGroup></UpdateGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
