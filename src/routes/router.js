import { createBrowserRouter } from "react-router-dom";
import ShowNames from "../Components/ShowNames";
import ShowSummery from "../Components/ShowSummery";
import Booking from "../Components/Booking";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <ShowNames />
    },
    {
        path: '/showSummery/:id',
        element: <ShowSummery />
    },
    {
        path: '/booking',
        element: <Booking/>
    }
])