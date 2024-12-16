import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const clickedUser = useSelector((state) => state.user);

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <GroupIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User's
          </Typography>
          <Badge badgeContent={clickedUser.length} color="error">
            <IconButton color="inherit" onClick={() => navigate("/showuser")}>
              <NotificationsIcon color="white" />
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
