import React from "react";
import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import "./homeStyle.scss";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundImage:
      "url('https://tackexinh.com/wp-content/uploads/2021/01/hinh-anh-dep-chat-luong-001.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    root: {
      marginBottom: "3rem",
    },
  },
  typographyTitle: {
    animation: `$aniTitle 3s linear`,
    color: "#fff",
    fontSize: "3rem",
    fontFamily: "Dancing Script",
    textAlign: "center",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: theme.palette.primary.main,
      fontSize: "1.8rem",
    },
  },
  typographyAddress: {
    color: "#fff",
    fontSize: "1rem",
    // animation: `$aniAdress 5s linear`,
  },
  label: {
    textTransform: "none",
  },
  card: {
    backgroundColor: "rgb(240 174 5 / 20%);",
    padding: "0.2rem 0.4rem",
    animation: `$aniAdress 3s linear`,
  },
  "@keyframes aniTitle": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes aniAdress": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  console.log("history", history);

  const handleLogin = () => {
    history.push("/login");
  };

  const handleLoginTest = () => {
    history.push("/logintest");
  };
  return (
    <Box className={classes.wrapper}>
      <Box className="load">
        <div className="item-1"></div>
        <div className="item-2"></div>
        <div className="item-3"></div>
        <div className="item-4"></div>
        <div className="item-5"></div>
        <div className="item-6"></div>
        <div className="item-7"></div>
        <div className="item-8"></div>
      </Box>
      <Typography className={classes.typographyTitle} gutterBottom>
        GIA PHẢ DÒNG HỌ TRƯƠNG XUÂN
      </Typography>
      <Container maxWidth="md" style={{ marginBottom: "3rem" }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card classes={{ root: classes.card }}>
              <CardContent>
                <Typography className={classes.typographyAddress}>
                  Địa chỉ: Khối II, Phường Nghi Hòa, thị xã Cửa Lò, tỉnh Nghệ An
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <Button
        classes={{ label: classes.label }}
        size="small"
        variant="contained"
        color="primary"
        onClick={handleLogin}
      >
        Đăng nhập
      </Button> */}
      <Button
        classes={{ label: classes.label }}
        size="small"
        variant="contained"
        color="primary"
        onClick={handleLoginTest}
      >
        Đăng nhập
      </Button>
    </Box>
  );
};

export default Home;
