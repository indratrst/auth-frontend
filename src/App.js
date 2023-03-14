import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./components/admin/Login";
import Home from "./pages/Home";
import Project from "./pages/admin/projectPages/Projects";
import AddUser from "./pages/admin/userPages/AddUser";
import EditUser from "./pages/admin/userPages/EditUser";
import AddProduct from "./pages/admin/productPages/AddProduct";
import EditProduct from "./pages/admin/productPages/EditProduct";
import AddProject from "./pages/admin/projectPages/AddProject";
import EditProject from "./pages/admin/projectPages/EditProject";
import Users from "./pages/admin/userPages/Users";
import Products from "./pages/admin/productPages/Products";
import AddAchieve from "./pages/admin/achievePages/AddAchieve";
import EditAchieve from "./pages/admin/achievePages/EditAchieve";
import Achieve from "./pages/admin/achievePages/Achieve";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/projects" element={<Project />}/>
          <Route path="/projects/add" element={<AddProject />}/>
          <Route path="/projects/edit/:id" element={<EditProject />}/>
          <Route path="/achieve" element={<Achieve />}/>
          <Route path="/achieve/add" element={<AddAchieve />}/>
          <Route path="/achieve/edit/:id" element={<EditAchieve />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
