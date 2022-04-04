import { Box, Button, Card, FormControl, Grid, Input, InputLabel, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import SwiperCore, { Pagination, EffectCoverflow, Navigation, Autoplay, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import usersApi from "../../api/userApi";

import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/swiper.scss";
import "./homeStyle.scss";
import "./style.scss";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay, Zoom]);

const imgList = [
  {
    src: "https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-c%E1%BA%A3nh-thi%C3%AAn-nhi%C3%AAn-%C4%90%C3%A0-L%E1%BA%A1t.jpg",
    title: "anh1",
    subTitle: "noi dung 1",
  },
  {
    src: "https://sadesign.vn/wp-content/uploads/2020/12/cach-chup-anh-trong-suong-mu-1.jpg",
    title: "anh1",
    subTitle: "noi dung 2",
  },
  {
    src: "https://i.vietgiaitri.com/2018/7/9/phong-canh-dep-thien-nhien-viet-nam-e42e77.jpg",
    title: "anh1",
    subTitle: "noi dung 3",
  },
  {
    src: "https://pus.edu.vn/wp-content/uploads/2021/06/hinh2-21.jpg",
    title: "anh1",
    subTitle: "noi dung 4",
  },
  {
    src: "http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
    title: "anh2",
    subTitle: "noi dung 5",
  },
  {
    src: "https://sanvemaybay.vn/includes/uploads/2019/05/L%C3%A2u-%C4%91%C3%A0i-Hohenzollern.1-e1558506219428.jpg",
    title: "anh2",
    subTitle: "noi dung 5",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecEKmWF-r_50PlNEOqeR2Zgp5l6ePiZBgBg&usqp=CAU",
    title: "anh4",
    subTitle: "noi dung 5",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEr3E_jDayQhg7T2Nka2gGjDl5-IOcN5ncaGwTwexBIxrwvW8-_ryHuVoJa9eVVPAmaQ&usqp=CAU",
    title: "anh2",
    subTitle: "noi dung 5",
  },
  {
    src: "https://cdn3.ivivu.com/2014/12/du-lich-da-lat-iVIVU.com-6.jpg",
    title: "anh2",
    subTitle: "noi dung 5",
  },
];

const useStyles = makeStyles((theme) => ({
  gridLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "rgb(227, 242, 253)",
  },
  cardWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50rem",
    padding: "10rem",
  },
  field: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    fontSize: "1.6rem",
    top: "4px",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    fullName: "",
    password: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    // console.log("name", name);
    // console.log("value", value);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.fullName === "admin" && formValue.password === "admin") {
      localStorage.setItem("admin", JSON.stringify(formValue));
      history.push("/layout");
      // dispatch();
    } else {
      alert("tài khoaanr không đúng");
    }
  };


  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ width: "100%", height: "100%" }}>
          <Box
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              // backgroundColor: "rgb(227, 242, 253)",
              backgroundColor: "rgb(237 189 31 / 26%)",
            }}
            sx={{ p: { xs: "0 1rem 0 1rem" } }}
          >
            <div className="photo-container">
              <Swiper
                effect="coverflow"
                grabCursor="true"
                centeredSlides="true"
                spaceBetween={1}
                slidesPerView={3}
                loop="true"
                loopAdditionalSlides={1000}
                pagination={{ clickable: true, dynamicBullets: true }}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 25,
                  depth: 250,
                  modifier: 1,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  1920: {
                    spaceBetween: 50,
                    slidesPerView: 3,
                  },
                  1280: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                  },
                  960: {
                    spaceBetween: 50,
                    slidesPerView: 2,
                  },
                  600: {
                    spaceBetween: 50,
                    slidesPerView: 2,
                  },
                  0: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                  },
                }}
              >
                {imgList &&
                  imgList.map((img, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={img.src} alt={img.title} className="photos" />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} container style={{ height: "100%" }}>
          <Grid item className={classes.gridLogin}>
            {/* <Card className={classes.cardWrapper}> */}
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
                {/* <div className={classes.field}>phong</div> */}
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
                <div className={classes.field}>
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
                </div>
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
                {/* <Grid container></Grid> */}
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="fullname"
                    label="FullName"
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                    defaultValue={formValue.fullName}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    style={{ marginBottom: "2rem" }}
                    InputLabelProps={{ className: classes.root }}
                  />
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    onChange={handleChange}
                    defaultValue={formValue.password}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ className: classes.root }}
                  />
                  <Button
                    style={{ width: "100%", marginTop: "3rem" }}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Đăng nhập
                  </Button>
                </form>
              </Grid>
            </Grid>
            {/* </Card> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
