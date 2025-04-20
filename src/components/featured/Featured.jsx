import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Wanter Tank Status</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="waterSummary">
          <div className="water">
            <div className="featuredCharts">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>
            <div className="bar">
              Tank 1 Serving Tower 1
            </div>
          </div>
          <div className="water">
            Initiate Filling
          </div>
        </div>
        <div className="waterSummary">
          <div className="water">
            <div className="featuredCharts">
            <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
            </div>
            <div className="bar">
              Tank 2 Serving Tower 2,3
            </div>
          </div>
          <div className="water">
            Initiate Filling
          </div>
         
        
         
        </div>

        



        

        
      </div>
    </div>


    

  );
};

export default Featured;
