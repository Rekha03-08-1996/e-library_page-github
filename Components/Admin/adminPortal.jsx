import { Route, Routes } from "react-router-dom";
import Home from "../Users/home";
import Books from "../Users/books";
import AddBook from "./addBook";
import AddUsers from "./addUser";
import Users from "./users";
import ReadBook from "../Users/readBook";
import NavBar from "../Users/navbar";
const AdminPortal = () => {
    return ( 
        <div className="adminportal">
           <NavBar/>
           <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Books/>} path='/books'/>
            <Route element={<Users/>} path='/users'/>
            <Route element={<AddBook/>} path='/addBook'/>
            <Route element={<AddUsers/>} path='/addUsers'/>
            <Route element={<ReadBook/>} path='/books/:id'/>
           </Routes>
        </div>
     );
}
 
export default AdminPortal;