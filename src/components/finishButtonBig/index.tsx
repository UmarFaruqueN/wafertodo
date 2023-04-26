import { Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { getTodo } from "../../redux/todos";
import { toast } from "react-toastify";
import { URL } from "../../utlise/contants";

type FinishButtonProps =
     | {
            done: string;
            id: string;
            title: string;
            data: string;
       }
     | any;

function Index(props: FinishButtonProps) {
     const dispatch = useAppDispatch();

     const changeStatus = () => {
          if (props.id) {
               axios.put(URL, {
                    headers: {
                         "Content-Type": "application/json",
                    },
                    id: props.id,
                    title: props.title,
                    data: props.data,
                    done: props.done === "0" ? "1" : "0",
               })
                    .then((data) => {
                         dispatch(getTodo(data.data));
                         toast(props.done === "0" ? "Todo Mark As Completed" : "Todo Mark As Incompleted");
                    })
                    .catch((err) => {
                         console.log(err);
                    });
          }
     };
     //  const handleClick = () => navigate("/viewalltodo");

     return (
          <>
               <Typography align="center" sx={{ fontWeight: "bold", color: "#fff" }}>
                    FINISH{" "}
               </Typography>
               <CheckCircleRoundedIcon
                    sx={{
                         fontSize: "75px",
                         color: props.done === "1" ? "green" : "#fff",
                         cursor: props.id ? "pointer" : "default",
                    }}
                    onClick={changeStatus}
               />
          </>
     );
}

export default Index;
