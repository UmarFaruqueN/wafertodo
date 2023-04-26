import { Container, Grid } from "@mui/material";
import { Header, FinishButtonBig, AddTodoCard } from "./components";

function Index() {
     return (
          <>
               <Container sx={{ mt: 6, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Header />
                    <Container maxWidth="xs">
                         <Grid container spacing={2}>
                              <Grid item xs={2.5}>
                                   <FinishButtonBig />
                              </Grid>
                              <Grid item xs={9}>
                                   <AddTodoCard />
                              </Grid>
                         </Grid>
                    </Container>
               </Container>
          </>
     );
}

export default Index;
