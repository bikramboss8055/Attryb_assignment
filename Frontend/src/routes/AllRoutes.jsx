import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "../components/privateRoute";
import MyCars from "../pages/MyCars";
import AddCar from "../pages/AddCar";
import EditCar from "../pages/Edit";
import Home from "../pages/Home";
import SignleCar from "../pages/SingleCar";

export default function AllRoutes(){
    return <Routes>
        <Route path='/add' element={<PrivateRoute><AddCar /></PrivateRoute>}></Route>
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>}></Route>
        <Route path='/myposts' element={<PrivateRoute><MyCars /></PrivateRoute>}></Route>
        <Route path='/single/:id' element={<PrivateRoute><SignleCar /></PrivateRoute>}></Route>
        <Route path='/car/:id' element={<PrivateRoute><EditCar /></PrivateRoute>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
    </Routes>
}