import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { cardImgList } from "../../constaint/cardImgList";
import ComputerIcon from "@material-ui/icons/Computer";
import HomeIcon from "@mui/icons-material/Home";
import photosApi from "../../api/photoApi";

const Main = () => {
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
            cardList[
              i
            ].style.transform = `translateY(calc(-50px + 25px*${value})) scale(calc(1.1 - 0.2*${value}))`;
            cardList[i].style.boxShadow = "1px 5px 5px chocolate";
            // cardList[i].style.transform = `scale(1.1)`;
          } else if (index < i && i - index <= 2) {
            cardList[
              i
            ].style.transform = `translateY(calc(-50px - 25px*${value})) scale(calc(1.1 + 0.2*${value}))`;
            cardList[i].style.boxShadow = "1px 5px 5px chocolate";
            // cardList[i].style.transform = `scale(1.1)`;
            console.log("2");
          } else {
            cardList[i].style.transform = `translateY(0px) scale(0.6)`;
            // cardList[i].style.transform = `scale(1)`;
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

  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await photosApi.getAll();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetData();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div className="item item__box-1">
          <ComputerIcon className="item-icon" color="primary" />
        </div>
        <div className="item item__box-2">
          <HomeIcon className="item-icon" color="primary" />
        </div>
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
              <Box key={index} className="cards">
                <img src={cardImg.urlImg} alt={cardImg.alt} />
                <div className="info">
                  <h1>{cardImg.title}</h1>
                  <p>{cardImg.detail}</p>
                  <Button variant="contained" color="primary">
                    See more
                  </Button>
                </div>
              </Box>
            );
          })}
      </div>
      {/* breadcrumb */}
      {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Main;
