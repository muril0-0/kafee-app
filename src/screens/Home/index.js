import * as React from "react";

import { Container, Text } from "./style";
import { NativeStyle } from "../../style/globals";
import { LinearGradient } from "expo-linear-gradient";

import CircleButtons from "../../components/CircleButtons.js";

const Home = () => {
  return (
    <>
      <LinearGradient
        colors={["#E7BB93", "#7C451E"]}
        style={NativeStyle.gradientStyle}
      />

      <Container>
        <Text>Home Screen</Text>
        <CircleButtons
          onPress={() => true}
          text="Effects"
          textColor="#834D26"
          mainColor="#F6E7CE"
          accentColor="#834D26"
        />
        <CircleButtons
          onPress={() => true}
          text="History"
          textColor="#834D26"
          mainColor="#F6E7CE"
          accentColor="#834D26"
        />
      </Container>
    </>
  );
};

export default Home;
