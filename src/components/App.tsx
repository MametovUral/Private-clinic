import RootLayouts from "@/layouts/RootLayouts";
import ChildrensH from "@/pages/ChildrensH";
import Clinic from "@/pages/Clinic";
import Cosmetology from "@/pages/Cosmetology";
import Dentistry from "@/pages/Dentistry";
import ErrorPage from "@/pages/ErrorPage";
import Maternity from "@/pages/Maternity";
import PlasticSurgery from "@/pages/PlasticSurgery";
import Reproduction from "@/pages/Reproduction";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Clinic /> },
      { path: "cosmetology", element: <Cosmetology /> },
      { path: "maternity-hospital", element: <Maternity /> },
      { path: "reproduction", element: <Reproduction /> },
      { path: "dentistry", element: <Dentistry /> },
      { path: "childrens-hospital", element: <ChildrensH /> },
      { path: "plastic-surgery", element: <PlasticSurgery /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
