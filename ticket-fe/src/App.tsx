import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "routes/Login";
import Ticket from "routes/ticket/Ticket";
import Schedule from "routes/schedule/Schedule";
import MyData from "routes/MyData";
import ErrorPage from "routes/Error";
import Root from "routes/Root";
import TicketAll from "routes/ticket/TicketAll";
import "./custom.css";
import TicketEdit from "routes/ticket/TicketEdit";
import TicketAdd from "routes/ticket/TicketAdd";
import Auth from "routes/Auth";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "tickets",
                element: <Ticket />,
            },
            {
                path: "tickets/all",
                element: <TicketAll />,
            },
            {
                path: "tickets/edit",
                element: <TicketEdit />,
            },
            {
                path: "tickets/edit/add",
                element: <TicketAdd />,
            },
            {
                path: "schedule",
                element: <Schedule />,
            },
            {
                path: "profile",
                element: <MyData />,
            },
        ],
    },
]);

function App() {
    // 모바일 화면 꽉 차는 100vh
    // height: calc(var(--vh, 1vh) * 100);
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    useEffect(() => {
        setScreenSize();
    });

    return <RouterProvider router={router} />;
}

export default App;
