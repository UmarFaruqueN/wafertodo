import { useState } from "react";
import { Box, Typography, Button, TextField, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks";
import axios from "axios";
import { useAppDispatch } from "../../../../redux/hooks";
import { getTodo } from "../../../../redux/todos";
import { toast } from "react-toastify";
import { URL } from "../../../../utlise/contants";

function Index() {
     const navigate = useNavigate();
     const [spinner, setSpinner] = useState(false);
     const dispatch = useAppDispatch();
     const [value, handleChange] = useForm({
          title: "",
          data: "",
          done: "0",
     });

     const addTodo = () => {
          setSpinner(true);
          axios.post(URL, {
               headers: {
                    "Content-Type": "application/json",
               },
               title: value.title,
               data: value.data,
               done: value.done,
          })
               .then((data) => {
                    dispatch(getTodo(data.data));
                    setSpinner(false);
                    toast("todo Added");
                    navigate(-1);
               })
               .catch((err) => {
                    console.log(err);
               });
     };
     const cancel = () => navigate(-1);

     return (
          <>
               <Box sx={{ height: "120px" }}>
                    <Typography align="center" sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}>
                         TITLE{" "}
                    </Typography>

                    <TextField
                         id="outlined-multiline-static"
                         name="title"
                         multiline
                         rows={1}
                         sx={{
                              width: "100%",
                              border: "none",
                              backgroundColor: "#fff",
                              borderRadius: "5px",
                              mb: 2,
                         }}
                         inputProps={{ maxLength: "20" }}
                         onChange={handleChange}
                    />

                    <Typography align="center" sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}>
                         DESCRIPTION{" "}
                    </Typography>

                    <TextField
                         id="outlined-multiline-static"
                         name="data"
                         multiline
                         rows={9}
                         sx={{ width: "100%", border: "none", backgroundColor: "#fff", borderRadius: "5px", mb: 2 }}
                         inputProps={{ maxLength: "310" }}
                         onChange={handleChange}
                    />

                    <Button
                         variant="contained"
                         size="large"
                         sx={{ width: "100%", mb: 2 }}
                         disabled={spinner}
                         onClick={addTodo}
                    >
                         {" "}
                         {spinner ? <CircularProgress /> : "ADD"}
                    </Button>
                    <Button variant="contained" size="large" color="error" sx={{ width: "100%" }} onClick={cancel}>
                         {" "}
                         Cancel
                    </Button>
               </Box>
          </>
     );
}

export default Index;
