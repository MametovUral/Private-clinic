import RootLayouts from "@/layouts/RootLayouts";
import AboutCenter from "@/pages/AboutCenter";
import Contacts from "@/pages/Contacts";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Prices from "@/pages/Prices";
import Services from "@/pages/Services";
import Specialists from "@/pages/Specialists";
import Stock from "@/pages/Stock";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    handle: {
      crumb: () => "Главная",
    },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-center",
        element: <AboutCenter />,
        handle: {
          crumb: () => "О центре",
        },
      },
      {
        path: "specialists",
        element: <Specialists />,
        handle: {
          crumb: () => "Наши специалисты",
        },
      },
      {
        path: "services",
        element: <Services />,
        handle: {
          crumb: () => "Услуги",
        },
      },
      {
        path: "prices",
        element: <Prices />,
        handle: {
          crumb: () => "Стоимость услуг",
        },
      },
      {
        path: "stock",
        element: <Stock />,
        handle: {
          crumb: () => "Акции",
        },
      },
      {
        path: "contacts",
        element: <Contacts />,
        handle: {
          crumb: () => "Контакты",
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
