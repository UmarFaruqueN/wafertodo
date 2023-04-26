import { Container, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/hooks";
import axios from "axios";
import { getTodo } from "../../../../redux/todos";
import { URL } from "../../../../utlise/contants";

type ViewTodoCard =
     | {
            id: string;
            title: string;
            data: string;
       }
     | any;

function Index(props: ViewTodoCard) {
     const navigate = useNavigate();
     const dispatch = useAppDispatch();
     const updateTodo = () => navigate(`/updatetodo/${props.id}`);
     const deleteTodo = () => {
          axios.delete(URL, {
               headers: {
                    "Content-Type": "application/json",
               },
               data: { id: props.id },
          })
               .then((data) => {
                    dispatch(getTodo(data.data));
                    navigate(-1);
               })
               .catch((err) => {
                    console.log(err);
               });
     };

     return (
          <>
               <Box sx={{ height: "120px" }}>
                    <Typography align="center" sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}>
                         TITLE{" "}
                    </Typography>
                    <Box
                         sx={{
                              backgroundColor: "#fff",
                              height: "70px",
                              borderRadius: "5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mb: 2,
                         }}
                    >
                         <Typography align="center" sx={{ color: "#000", fontSize: "20px" }}>
                              {props?.title?.toUpperCase()}
                         </Typography>
                    </Box>
                    <Typography align="center" sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}>
                         DESCRIPTION{" "}
                    </Typography>
                    <Container
                         sx={{
                              backgroundColor: "#fff",
                              height: "240px",
                              borderRadius: "5px",
                              mb: 2,
                              overflow: "hidden",
                              maxHeight: "240px",
                              maxWidth: "200px",
                              p: 2,
                         }}
                    >
                         <Typography variant="body1" align="left" sx={{ color: "#000", fontSize: "15px" }}>
                              {props.data}
                         </Typography>
                    </Container>
                    <Button variant="contained" size="large" sx={{ width: "100%", mb: 2 }} onClick={updateTodo}>
                         {" "}
                         Update
                    </Button>
                    <Button variant="contained" size="large" color="error" sx={{ width: "100%" }} onClick={deleteTodo}>
                         {" "}
                         Delete
                    </Button>
               </Box>
          </>
     );
}

export default Index;
