import { Container, Grid } from "@mui/material";
import { Header, FinishButtonBig, ViewCard } from "./components";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type TodoData =
     | {
            id: string;
            title: string;
            data: string;
            done: string;
       }
     | any;

function Index() {
     const navigate = useNavigate();
     const { id } = useParams();
     const data = useAppSelector((state) => state.todo.todo);
     let todoData: TodoData = {};
     const Data = data?.filter((obj) => {
          return obj.id === id;
     });
     if (Data !== undefined) {
          todoData = Data[0];
     }
     if (Data === undefined) {
          navigate("/");
     }

     //  const handleClick = () => navigate("/viewalltodo");

     return (
          <>
               <Container sx={{ mt: 6, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Header />
                    <Container maxWidth="xs">
                         <Grid container spacing={2}>
                              <Grid item xs={2.5}>
                                   <FinishButtonBig
                                        done={todoData?.done}
                                        id={todoData?.id}
                                        title={todoData?.title}
                                        data={todoData?.data}
                                   />
                              </Grid>
                              <Grid item xs={9}>
                                   <ViewCard id={todoData?.id} title={todoData?.title} data={todoData?.data} />
                              </Grid>
                         </Grid>
                    </Container>
               </Container>
          </>
     );
}

export default Index;
