import { RouterProvider, Navigate, createBrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Role from "./pages/role"

// 配置文件数组
export const router = createBrowserRouter([
    {
        path: '/user/login',
        Component: Login
    },
    {
        path: '/',
        element: (
            <Navigate to="/role" />
        )
    },
    {
        path: '*',
        Component: Role
    },
])

// 返回一个组件
const Router = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default Router