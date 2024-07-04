import RootLayouts from "@/layouts/RootLayouts";
import AboutCenter from "@/pages/AboutCenter";
import Contacts from "@/pages/Contacts";
import ErrorPage from "@/pages/ErrorPage";
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
    children: [
      { index: true, element: <AboutCenter /> },
      { path: "specialists", element: <Specialists /> },
      { path: "services", element: <Services /> },
      { path: "prices", element: <Prices /> },
      { path: "stock", element: <Stock /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
