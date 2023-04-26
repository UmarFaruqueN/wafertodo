import { Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Index() {
     const navigate = useNavigate();
     const handleClick = () => navigate("/");

     return (
          <Container maxWidth="sm" sx={{ marginBottom: "50px" }}>
               <Box sx={{ display: "flex", justifyContent: "center", fontSize: "25px" }}>
                    <Typography
                         variant="h3"
                         sx={{ color: "#fff", fontWeight: "800", cursor: "pointer" }}
                         onClick={handleClick}
                    >
                         TODO&nbsp;
                    </Typography>
                    <Typography
                         variant="h3"
                         sx={{ color: "#0f64a3", fontWeight: "800", cursor: "pointer" }}
                         onClick={handleClick}
                    >
                         LIST
                    </Typography>
               </Box>
          </Container>
     );
}

export default Index;
