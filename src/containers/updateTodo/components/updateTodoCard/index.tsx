import { useState } from "react";
import { Box, Typography, Button, TextField, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks";
import axios from "axios";
import { useAppDispatch } from "../../../../redux/hooks";
import { getTodo } from "../../../../redux/todos";
import { toast } from "react-toastify";
import { URL } from "../../../../utlise/contants";

type UpdateTodoData =
     | {
            id: string;
            title: string;
            data: string;
            done: string;
       }
     | any;

function Index(props: UpdateTodoData) {
     const navigate = useNavigate();
     const dispatch = useAppDispatch();
     const [spinner, setSpinner] = useState(false);
     const [value, handleChange] = useForm({
          title: props?.title,
          data: props?.data,
          done: props?.done,
     });

     const updateTodo = () => {
          setSpinner(true);

          axios.put(URL, {
               headers: {
                    "Content-Type": "application/json",
               },
               id: props.id,
               title: value.title,
               data: value.data,
               done: value.done,
          })
               .then((data) => {
                    dispatch(getTodo(data.data));
                    setSpinner(false);
                    toast("Todo Updated");
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
                         defaultValue={props.title}
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
                         defaultValue={props.data}
                    />

                    <Button
                         variant="contained"
                         size="large"
                         color="success"
                         sx={{ width: "100%", mb: 2 }}
                         disabled={spinner}
                         onClick={updateTodo}
                    >
                         {" "}
                         {spinner ? <CircularProgress /> : "Save"}
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
