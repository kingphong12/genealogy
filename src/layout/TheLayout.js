import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";

// material-ui
import { makeStyles, useTheme } from "@material-ui/styles";
import { AppBar, Button, CssBaseline, Toolbar, useMediaQuery } from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";

// third-party
import clsx from "clsx";

// project imports
// import Breadcrumbs from "ui-component/extended/Breadcrumbs";
import Header from "./mainLayout/Header";
import Sidebar from "./mainLayout/Sidebar";
// import Customization from "../Customization";
// import navigation from "menu-items";
// import { drawerWidth } from "store/constant";
// import { SET_MENU } from "store/actions";
// assets
// import { IconChevronRight } from "@tabler/icons";
import { open } from "../redux/action/open";
import { drawerWidth } from "../contain/variable";
import { cardImgList } from "../constaint/cardImgList";

import "./main.scss";
// style constant
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  appBarWidth: {
    transition: theme.transitions.create("width"),
    backgroundColor: theme.palette.background.default,
  },
  content: {
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: -(drawerWidth - 20),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "16px",
      marginRight: "10px",
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
}));

// ===========================|| MAIN LAYOUT ||=========================== //

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.openSibar.opened);
  const dispatch = useDispatch();

  const handleLeftDrawerToggle = () => {
    dispatch(open(!leftDrawerOpened));
  };

  React.useEffect(() => {
    dispatch(open(!matchDownMd));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);
  console.log("matchDownMd", matchDownMd);

  useEffect(() => {
    const wrapperElement = document.querySelector(".wrapper");
    const cardList = document.querySelectorAll(".item");
    const cardListLength = cardList.length;
    console.log(cardListLength);

    cardList.forEach((item, index) => {
      item.addEventListener("mouseenter", (event) => {
        for (let i = 0; i <= cardListLength - 1; i++) {
          let value = index - i;
          if (index >= i && index - i <= 2) {
            cardList[i].style.transform = `translateY(calc(-50px + 25px*${value}))`;
            cardList[i].style.boxShadow = "1px 5px 5px chocolate";
          } else if (index < i && i - index <= 2) {
            cardList[i].style.transform = `translateY(calc(-50px - 25px*${value}))`;
            cardList[i].style.boxShadow = "1px 5px 5px chocolate";
            console.log("2");
          } else {
            cardList[i].style.transform = `translateY(calc(0px)`;
            cardList[i].style.boxShadow = "none";
          }
        }
      });
    });

    wrapperElement.addEventListener("mouseleave", (event) => {
      cardList.forEach((item, index) => {
        cardList[index].style.transform = `translateY(calc(0px)`;
        cardList[index].style.boxShadow = "none";
      });
    });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* header */}
      <AppBar position="fixed" color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* main content */}
      <main
        className={clsx([
          classes.content,
          {
            [classes.contentShift]: leftDrawerOpened,
          },
        ])}
      >
        <div className="wrapper">
          <div className="item item__box-1">
            <ComputerIcon className="item-icon" color="primary" />
          </div>
          <div className="item item__box-2"></div>
          <div className="item item__box-3"></div>
          <div className="item item__box-4"></div>
          <div className="item item__box-5"></div>

          <div className="item item__box-4"></div>
          <div className="item item__box-5"></div>
          <div className="item item__box-5"></div>
          <div className="item item__box-5"></div>
          <div className="item item__box-5"></div>
        </div>

        <div className="container-box">
          {cardImgList &&
            cardImgList.map((cardImg, index) => {
              return (
                <div key={index} className="cards">
                  <img src={cardImg.urlImg} alt={cardImg.alt} />
                  <div className="info">
                    <h1>{cardImg.title}</h1>
                    <p>{cardImg.detail}</p>
                    <Button variant="contained" color="primary">
                      See more
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
        {/* breadcrumb */}
        {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
        {/* <Outlet /> */}
      </main>
    </div>
  );
};

export default MainLayout;
