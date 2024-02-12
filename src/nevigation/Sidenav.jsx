import * as React from "react";
import "./Sidenav.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Height } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import InstagramIcon from "@mui/icons-material/Instagram";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <img
        src="https://www.pngitem.com/pimgs/m/132-1327993_instagram-logo-word-png-transparent-png.png"
        style={{ height: "50px", margin: "15px" }}
      />
      <Toolbar />
      <Divider />
      <List>
        {["Home"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <HomeIcon />
              &nbsp;&nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        {["Search"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <SearchIcon />
              &nbsp;&nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        {["Explore"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ExploreIcon />
              &nbsp;&nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        {["Reels"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <InstagramIcon />
              &nbsp;&nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        {["Messages"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <MessageIcon />
              &nbsp;&nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        {["Notification"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <NotificationsActiveIcon />
              &nbsp;&nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        {["Create"].map((text, index) => (
          <ListItem key={text} disablePadding>
         
            <ListItemButton>
              <NavLink to="/Post" >

                <AddBoxIcon />
                &nbsp;&nbsp;
              </NavLink>
              
              <ListItemText primary={text} />
            </ListItemButton>
              
          </ListItem>
        ))}

        {["Profile"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <AccountBoxIcon />
              &nbsp;&nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            alignItems: "center",
            height: "60px",
          }}
        >
          <Avatar
            className="image1"
            alt="Remy Sharp"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid #910A67",
              borderradius: "50%",
            }}
          />
          <Avatar
            alt="Travis Howard"
            src="data:image/jpeg;base64,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"
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid #910A67",
              borderradius: "50%",
            }}
          />
          <Avatar
            alt="Cindy Baker"
            src="https://media.licdn.com/dms/image/C4D03AQG4jENk0cwMAQ/profile-displayphoto-shrink_800_800/0/1615828289513?e=2147483647&v=beta&t=pmKsR_Ohwj-dklToLRRZZ4nZa4h9pvlIi_JRdMseQkQ"
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid #910A67",
              borderradius: "50%",
            }}
          />
          <Avatar
            alt="Cindy Baker"
            src="https://media.licdn.com/dms/image/D5603AQHO--mkA21RSg/profile-displayphoto-shrink_800_800/0/1688773795556?e=2147483647&v=beta&t=MZPvYhsjkvBLt1ChbuC1UxF9KeQdazLn5lhKtCKaqYM"
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid #910A67",
              borderradius: "50%",
            }}
          />
          <Avatar
            alt="Cindy Baker"
            src="https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid #910A67",
              borderradius: "50%",
            }}
          />
          <Avatar
            alt="Cindy Baker"
            src="https://assets.weforum.org/sf_account/image/rA_TF_tkRNKjxk_gzlr9UlBXMhuoPZNeRaRO7-ys_xw.jpg"
            style={{
              width: "50px",
              height: "50px",
              border: "3px solid #910A67",
              borderradius: "50%",
            }}
          />
        </Stack>
        {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            
            
          </IconButton>
          
        </Toolbar> */}
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer> */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
