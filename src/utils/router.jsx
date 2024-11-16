import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppoinments from "../components/MyAppoinments/MyAppoinments";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async ()=> {
                        const servicesRes = await fetch("/service.json");
                        const servicesData = await servicesRes.json();

                        const feeBackRes = await fetch("/happyclients.json");
                        const feedBackData = await feeBackRes.json();

                        return {servicesData, feedBackData};
                }
            },
            {
                path: "/allTreatments",
                element: <AllTreatments></AllTreatments>,
                loader: ()=> fetch("/service.json")
            },
            {
                path: "/myAppoinments",
                element: <MyAppoinments></MyAppoinments>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: async ({params})=> {
                    const res = await fetch("/service.json")
                    const data = await res.json()
                    console.log(data, params.id);
                    const singleData = data.find(d=>d.id ==params.id)
                    return singleData;
                }
            }
        ]
    }
])

export default router;