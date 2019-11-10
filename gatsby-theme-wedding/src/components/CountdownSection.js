import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown-now";

import backgroundImg from "../images/background.jpg";
import CountItem from "./CountItem";
import animationParams from "./animation-params";

const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 8rem 0;
  justify-content: center;
  background: url(${backgroundImg}) rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-size: cover;
  flex-direction: column;
  background-position: center;
  color: #fff;
`;

const CountContainer = styled.div`
  display: flex;
`;

const TitleContainer = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 0;
`;

const Subtitle = styled.sub`
  font-weight: 600;
  font-size: 1rem;
`;

function CountdownSection() {
  return (
    <Container>
      <TitleContainer>
        <Title {...animationParams}>Save the Date</Title>
        <Subtitle {...animationParams} data-sal-delay="600">
          Join us in Celebration
        </Subtitle>
      </TitleContainer>
      <Countdown
        date={new Date("11-03-2019 11:20:00")}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <p>Done.</p>;
          }
          return (
            <CountContainer>
              <CountItem title="Days" count={days} />
              <CountItem title="Hours" count={hours} />
              <CountItem title="Minutes" count={minutes} />
              <CountItem title="Seconds" count={seconds} />
            </CountContainer>
          );
        }}
      />
    </Container>
  );
}

export default CountdownSection;
