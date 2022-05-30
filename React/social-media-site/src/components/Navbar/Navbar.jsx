import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "../Link";
import { BrowserRouter, Route } from "react-router-dom";
import PostFeed from "../PostFeed/PostFeed";
import Profile from "../ProfileView/Profile";

function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Stack>
        <Avatar
          alt="Profile picture"
          src=""
          sx={{ width: 90, height: 90, margin: 3 }}
        />
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ marginBottom: 0 }}
        >
          Dashboard
        </Button>
        <BrowserRouter>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Route path="/my-feed" exact component={PostFeed}>
              <MenuItem onClick={handleClose}>My Feed</MenuItem>
            </Route>
            <Route path="/my-profile" exact component={Profile}>
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
            </Route>
            <Route path="/logout" exact component={null}>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Route>
          </Menu>
        </BrowserRouter>
      </Stack>
    </div>
  );
}

export default Navbar;
