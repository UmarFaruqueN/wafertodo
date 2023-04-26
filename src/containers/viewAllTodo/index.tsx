import { Container, Grid } from "@mui/material";
import { Header, Card } from "./components";
import { useAppSelector } from "../../redux/hooks";

function Index() {
     const data = useAppSelector((state) => state.todo.todo);

     return (
          <>
               <Container sx={{ mt: 6, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Header />
                    <Container maxWidth="md">
                         <Grid container spacing={4} justifyContent={"center"} alignItems={"center"}>
                              {data?.map((obj) => (
                                   <Card key={obj.id} id={obj.id} title={obj.title} data={obj.data} done={obj.done} />
                              ))}
                         </Grid>
                    </Container>
               </Container>
          </>
     );
}

export default Index;
