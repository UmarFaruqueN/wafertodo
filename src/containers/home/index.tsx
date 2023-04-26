import { Container, Grid, Button } from "@mui/material";
import { Card, Header } from "./components";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

function Index() {
     const data = useAppSelector((state) => state.todo.todo);
     const navigate = useNavigate();
     const viewAllTodo = () => navigate("/viewalltodo");
     const addTodo = () => navigate("/addtodo");

     return (
          <>
               <Container sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Header />
                    <Container maxWidth="sm">
                         <Grid container justifyContent={"center"}>
                              {data?.slice(0, 4).map((obj) => (
                                   <Card key={obj.id} id={obj.id} title={obj.title} data={obj.data} done={obj.done} />
                              ))}

                              <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                   <Button
                                        onClick={viewAllTodo}
                                        sx={{ textTransform: "none", textDecoration: "underline", color: "white", mb: 2 }}
                                   >
                                        View All
                                   </Button>
                                   <Button
                                        variant="contained"
                                        endIcon={<EditIcon sx={{ backgroundColor: "white", color: "#1976d2" }} />}
                                        sx={{ textTransform: "none", width: "200px" }}
                                        onClick={addTodo}
                                   >
                                        Add Todo{" "}
                                   </Button>
                              </Grid>
                         </Grid>
                    </Container>
               </Container>
          </>
     );
}

export default Index;
