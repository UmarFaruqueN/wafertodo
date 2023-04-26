import { Typography, Grid, styled, Paper, Button } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router-dom";

type CardProps = {
     id: string;
     title: string;
     data: string;
     done: string;
};

function Index(props: CardProps) {
     const navigate = useNavigate();
     const viewTodo = () => navigate(`/viewtodo/${props.id}`);
     const Item = styled(Paper)(({ theme }) => ({
          backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          ...theme.typography.body2,
          padding: theme.spacing(1),
          textAlign: "center",
          color: theme.palette.text.secondary,
          height: "55px",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
     }));

     return (
          <Grid item xs={10} alignItems={"center"} mb={4}>
               <Item>
                    <Grid container spacing={1} alignItems={"center"}>
                         <Grid item xs={2}>
                              <CheckCircleRoundedIcon sx={{ color: props.done === "1" ? "green" : "black" }} />
                         </Grid>
                         <Grid item xs={7}>
                              <Typography align="left" sx={{ fontWeight: "bold", color: "#000" }}>
                                   {props?.title?.toUpperCase()}
                              </Typography>
                              <Typography
                                   align="left"
                                   variant="body1"
                                   sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        height: "20px",
                                        fontSize: "10px",
                                        lineHeight: "10px",
                                   }}
                              >
                                   {props.data}
                              </Typography>
                         </Grid>
                         <Grid item xs={3}>
                              <Button variant="contained" size="small" onClick={viewTodo}>
                                   VIEW
                              </Button>
                         </Grid>
                    </Grid>
               </Item>
          </Grid>
     );
}

export default Index;
