import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ViewAllTodo, Addtodo, ViewTodo, UpdateTodo } from "./containers";
import axios from "axios";
import { useAppDispatch } from "./redux/hooks";
import { getTodo } from "./redux/todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL } from "./utlise/contants";

function App() {
     const dispatch = useAppDispatch();
     useEffect(() => {
          axios.get(URL)
               .then((data) => {
                    dispatch(getTodo(data.data));
               })
               .catch((err) => {
                    console.log(err);
               });
     }, [dispatch]);
     return (
          <>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/viewalltodo" element={<ViewAllTodo />} />
                    <Route path="/addtodo" element={<Addtodo />} />
                    <Route path="/viewtodo/:id" element={<ViewTodo />} />
                    <Route path="/updatetodo/:id" element={<UpdateTodo />} />
                    <Route path="*" element={<Home />} />
               </Routes>
               <ToastContainer />
          </>
     );
}

export default App;
