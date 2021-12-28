import { Box, Card, Grid, IconButton } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
  caroselItem: {
    height: "100%",
    width: "50rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0.8)",
    transition: "transform 0.5s linear",
  },
  root: {
    "&:hover": {
      opacity: 1,
      backgroundColor: "#f9f8f761",
    },
  },
}));

const colors = ["red", "blue", "green", "grey", "brown", "orange", "purple", "pink", "yellow"];

const Login = () => {
  const [cardList, setCardList] = useState([]);
  const [animationCarosel, setAnimationCarosel] = useState(false);
  const ref = useRef(null);
  console.log("ref", ref.current);
  useEffect(() => {
    console.log("ref", ref.current.style.width);
    let newCard = [];
    let totalCard = 9;
    let center = {
      x: parseFloat(ref.current.style.width) / 2,
      y: parseFloat(ref.current.style.height) / 2,
    };
    let middleCard = Math.floor(totalCard / 2);
    let newX = 0;
    let newY = 0;
    let newzIndex = 0;
    let newScale = 1;

    for (let i = 0; i < 9; i++) {
      if (i < middleCard) {
        newX = center.x - 50 * (middleCard - i);
        newY = center.y;
        newX = newX + 0.333 * 50 * (middleCard - i);
        newzIndex = i;
        newScale = Math.pow(0.6, middleCard - i);
      } else {
        newX = center.x + 50 * (i - middleCard);
        console.log(i, "newX: ", newX);
        newY = center.y;
        newX = newX - 0.333 * 50 * (i - middleCard);
        newzIndex = i * -1.0;
        newScale = Math.pow(0.6, i - middleCard);
      }
      newCard.push(
        <Card
          className={classes.caroselItem}
          style={{
            backgroundColor: `${colors[i]}`,
            left: `${newX}rem`,
            top: `${newY}rem`,
            zIndex: i === middleCard ? 100 : newzIndex,
            transform: `translate(-50%, -50%) scale(${newScale})`,
            opacity: i === middleCard ? 1 : 0.5,
            // transform:
            //   i === middleCard
            //     ? `translate(-50%, -50%) scale(1)`
            //     : `translate(-50%, -50%) scale(${newScale})`,
            // backgroundSize: "cover",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: " space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <IconButton
              // style={{ opacity: "0.6" }}
              onClick={handlePrev}
              // disabled={i === middleCard ? true : false}
              // aria-label="delete"
              classes={{ root: classes.root }}
              // className={classes.btn}
              size="lg"
            >
              <ArrowBackIosIcon style={{ color: "#fff" }} fontSize="inherit" />
            </IconButton>

            <IconButton
              // style={{ opacity: "0.6" }}
              onClick={handleNext}
              // disabled={i === middleCard ? true : false}
              // aria-label="delete"
              // className={classes.btn}
              classes={{ root: classes.root }}
              size="lg"
            >
              <ArrowForwardIosIcon style={{ color: "#fff" }} fontSize="inherit" />
            </IconButton>
          </div>
          <img src={imgList[i].src} alt={imgList[i].title} style={{ width: "100%", objectFit: "cover" }} />
        </Card>
      );
    }

    setCardList(newCard);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleNext();
  //   }, 2000);
  // });

  const handleNext = () => {
    // console.log(ref.current.children);
    if (!animationCarosel) {
      setAnimationCarosel(true);
      // let middleChildren = Math.floor();

      let lastCardLeft = ref.current.children[ref.current.children.length - 1].style.left;
      let lastCardZindex = ref.current.children[ref.current.children.length - 1].style.zIndex;
      let lastCardOpacity = ref.current.children[ref.current.children.length - 1].style.opacity;
      let lastCardTransform = ref.current.children[ref.current.children.length - 1].style.transform;

      for (let i = ref.current.children.length - 1; i > 0; i--) {
        ref.current.children[i].style.transitionDuration = "1s";
        ref.current.children[i].style.left = ref.current.children[i - 1].style.left;
        ref.current.children[i].style.zIndex = ref.current.children[i - 1].style.zIndex;
        ref.current.children[i].style.opacity = ref.current.children[i - 1].style.opacity;
        ref.current.children[i].style.transform = ref.current.children[i - 1].style.transform;
      }

      ref.current.children[0].style.transformDuration = "0.2s";
      ref.current.children[0].style.transform = `transform(-50%, -50%) scale(0)`;

      setTimeout(() => {
        ref.current.children[0].style.transitionDuration = "0.0s";
        ref.current.children[0].style.left = lastCardLeft;
        ref.current.children[0].style.zIndex = lastCardZindex;
        ref.current.children[0].style.opacity = lastCardOpacity;
        ref.current.appendChild(ref.current.children[0]);
        setTimeout(() => {
          ref.current.children[ref.current.children.length - 1].style.transitionDuration = "0.2s";
          ref.current.children[ref.current.children.length - 1].style.transform = lastCardTransform;
          setAnimationCarosel(false);
        }, 100);
      }, 700);
    }
  };

  const handlePrev = () => {
    if (!animationCarosel) {
      setAnimationCarosel(true);

      let firstCardLeft = ref.current.children[0].style.left;
      let firstCardZindex = ref.current.children[0].style.zIndex;
      let firstCardOpacity = ref.current.children[0].style.opacity;
      let firstCardTransform = ref.current.children[0].style.transform;

      for (let i = 0; i < ref.current.children.length - 1; i++) {
        ref.current.children[i].style.transitionDuration = "1s";
        ref.current.children[i].style.left = ref.current.children[i + 1].style.left;
        ref.current.children[i].style.zIndex = ref.current.children[i + 1].style.zIndex;
        ref.current.children[i].style.opacity = ref.current.children[i + 1].style.opacity;
        ref.current.children[i].style.transform = ref.current.children[i + 1].style.transform;
      }

      ref.current.children[0].style.transitionDuration = "0.2s";
      ref.current.children[0].style.transform = `transform(-50%, -50%) scale(0)`;

      setTimeout(() => {
        ref.current.children[0].style.transitionDuration = "0.0s";
        ref.current.children[0].style.left = firstCardLeft;
        ref.current.children[0].style.opacity = firstCardOpacity;
        ref.current.children[0].style.zIndex = firstCardZindex;
        ref.current.insertBefore(
          ref.current.children[ref.current.children.length - 1],
          ref.current.children[0]
        );
        setTimeout(() => {
          ref.current.children[0].style.transitionDuration = "0.2s";
          ref.current.children[0].style.transform = firstCardTransform;
          setAnimationCarosel(false);
        }, 100);
      }, 700);
    }
  };

  const classes = useStyles();
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{ width: "100%", height: "100%" }}>
          <Box
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              style={{
                position: "relative",
                width: "50rem",
                height: "50rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              ref={ref}
            >
              {cardList}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          phong
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
