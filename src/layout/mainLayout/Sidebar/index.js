import PropTypes from "prop-types";
import React from "react";

// material-ui
import { makeStyles, useTheme } from "@material-ui/styles";
import { Box, Drawer, useMediaQuery } from "@material-ui/core";

// third-party
// import PerfectScrollbar from "react-perfect-scrollbar";
// import { BrowserView, MobileView } from "react-device-detect";
import { drawerWidth } from "../../../contain/variable";
// import Hidden from "@mui/material/Hidden";

// project imports
// import MenuList from "./MenuList";
// import LogoSection from "../LogoSection";
// import MenuCard from "./MenuCard";

// style constant
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    backgroundColor: "red",
    width: drawerWidth,
    // background: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRight: "none",
    [theme.breakpoints.up("md")]: {
      top: "88px",
    },
  },
  ScrollHeight: {
    height: "calc(100vh - 88px)",
    paddingLeft: "16px",
    paddingRight: "16px",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 56px)",
    },
  },
  boxContainer: {
    display: "flex",
    padding: "16px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

// ===========================|| SIDEBAR DRAWER ||=========================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  // console.log(drawerOpen);

  const classes = useStyles();
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  // console.log(matchUpMd);
  const drawer = (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <div className={classes.boxContainer}>
          {/* <LogoSection /> */}
          Logo
        </div>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        {/* <PerfectScrollbar component="div" className={classes.ScrollHeight}> */}
        {/* <MenuList /> */}
        {/* <MenuCard /> */}
        mobile
        {/* </PerfectScrollbar> */}
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Box sx={{ px: 2 }}>
          {/* <MenuList />

          <MenuCard /> */}
          Browwer
        </Box>
      </Box>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
        PaperProps={false}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
};

export default Sidebar;