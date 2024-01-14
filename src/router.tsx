import { RouterProvider } from "react-router-dom"

// 配置文件数组
export const router = [
    // {
    //     path: '/user/login',
    //     Component: 
    // }
]

// 返回一个组件
const Router = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default Router