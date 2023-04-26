import { Container, Box, Typography, Grid, styled, Paper, Button } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router-dom";

type ViewAllCardProps = {
     id: string;
     title: string;
     data: string;
     done: string;
};

function Index(props: ViewAllCardProps) {
     const Item = styled(Paper)(({ theme }) => ({
          backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          ...theme.typography.body2,
          padding: theme.spacing(1),
          textAlign: "center",
          color: theme.palette.text.secondary,
          height: "225px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          minWidth: "100px",
          maxWidth: "173px",
     }));
     const navigate = useNavigate();
     const viewTodo = () => navigate(`/viewtodo/${props.id}`);

     return (
          <Grid
               item
               xs={12}
               sm={4}
               md={3}
               justifyContent={"center"}
               alignItems={"center"}
               sx={{ xs: { flexDirection: "column" } }}
          >
               <Item>
                    <Box>
                         <CheckCircleRoundedIcon sx={{ color: props.done === "1" ? "green" : "black" }} />
                    </Box>
                    <Container>
                         <Typography
                              align="center"
                              sx={{ fontWeight: "bold", color: "#000", mb: 2, overflow: "hidden", maxHeight: "24px" }}
                         >
                              {props?.title?.toUpperCase()}
                         </Typography>
                         <Typography
                              align="left"
                              sx={{
                                   overflow: "hidden",
                                   textOverflow: "ellipsis",
                                   height: "100px",
                                   fontSize: "10px",
                                   lineHeight: "10px",
                                   mb: 2,
                              }}
                         >
                              {props.data}
                         </Typography>
                         <Button variant="contained" size="small" onClick={viewTodo}>
                              VIEW
                         </Button>
                    </Container>
               </Item>
          </Grid>
     );
}

export default Index;
