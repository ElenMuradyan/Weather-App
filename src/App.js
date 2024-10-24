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
            <Route path={ROUTE_CONSTANTS.MONDAY} element={<WeekDayPage dayName={'Monday'}/>}></Route>
            <Route path={ROUTE_CONSTANTS.TUESDAY} element={<WeekDayPage dayName={'Tuesday'}/>}></Route>
            <Route path={ROUTE_CONSTANTS.WEDNESDAY} element={<WeekDayPage dayName={'Wednesday'}/>}></Route>
            <Route path={ROUTE_CONSTANTS.THURSDAY} element={<WeekDayPage dayName={'Thursday'}/>}></Route>
            <Route path={ROUTE_CONSTANTS.FRIDAY} element={<WeekDayPage dayName={'Friday'}/>}></Route>
            <Route path={ROUTE_CONSTANTS.SATURDAY} element={<WeekDayPage dayName={'Saturday'}/>}></Route>
            <Route path={ROUTE_CONSTANTS.SUNDAY} element={<WeekDayPage dayName={'Sunday'}/>}></Route>
          </Route>
        )
      )
  }/>
  )
}

export default App;