import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Login from 'pages/Login';
import Main from "pages/Main";
import Ticket from "pages/ticket/Ticket";
import Schedule from "pages/Schedule";
import MyData from "pages/MyData";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "tickets",
        element: <Ticket />,
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
  }
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