import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";

import { Criar } from "./components/aluno/Criar"; 
import Listar from "./components/aluno/Listar";
import Editar from "./components/aluno/Editar"


const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home />,
            children: [
                {
                    path:"aluno/listar",
                    element:<Listar />
                },
                {
                    path:"aluno/criar",
                    element:<Criar />
                },
                {
                    path:"aluno/editar/:id",
                    element:<Editar />
                }
            ]
        }
    ]

)

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main