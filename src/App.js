import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./core/utils/constants";
import Main from "./pages/Main";
import MainLayout from "./layout/MainLayout";
import WeekDayPage from "./pages/WeekDayPage";
import "./styles/global.css";

const App=()=>{
  return (
 <RouterProvider 
    router={
      createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Main/>}></Route>
            <Route path="Erevan/:dayName" element={<WeekDayPage />} />
          </Route>
        )
      )
  }/>
  )
}

export default App;