import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import "antd/dist/antd.css";

const WeatherApp = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Input placeholder="search" />

          <WeatherContainer>
            <Date>09/07/2021</Date>
            <span>New york city, ln</span>
            <Box>nnn</Box>
          </WeatherContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default WeatherApp;

const Box = styled.div`
  width: 300px;
  height: 35vh;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Container = styled.div`
  // background-color: blue;
  width: 100vw;
  height: 100vh;
  background: url("images/pexels.jpg") center center / cover fixed no-repeat;
  display: flex;
  justify-content: center;

  &:before {
    // position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  input {
    margin-top: 20px;
    width: 350px;
    height: 80px;
    border-radius: 0 0 8px 8px;
  }
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //width: 500px;
  height: 800px;

  span {
    font-size: 45px;
    //margin-top: 10px;
    color: white;
    font-weight: bold;
    font-family: poppins;
  }
`;

const Date = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin-top: 30px;
`;
