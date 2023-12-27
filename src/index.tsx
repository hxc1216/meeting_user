import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "./ErrorPage"
import { Login } from "./user/Login"
import { Register } from "./user/Register"
import { UpdatePassword } from "./user/UpdatePassword"

const routes = [
	{
		path: "/",
		element: <div>index</div>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/update_password",
		element: <UpdatePassword />,
	},
]
const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<RouterProvider router={router}></RouterProvider>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
