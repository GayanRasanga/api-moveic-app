import React, { useEffect } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from "@material-ui/icons/Whatshot";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {setValue(newValue);};
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    }else if (value === 1) {
      navigate("/home");
    }else if (value === 2) {
      navigate("/about");
    }else if (value === 3) {
      navigate("/");
    }
  }, [value, navigate]);
  

  return (
    <BottomNavigation sx={{ 
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
        color:"white"

     }} value={value} onChange={handleChange}>
       <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
      
    </BottomNavigation>
  );
}