import * as React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const ButtonContainer = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
`;

const ButtonBorder = styled.View`
  border: 5px solid ${(props) => props.mainColor};
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ButtonContent = styled.View`
  border: 5px solid ${(props) => props.accentColor};
  background-color: ${(props) => props.mainColor};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.textColor};
`;

const CircleButtons = ({
  onPress,
  mainColor,
  accentColor,
  text,
  textColor,
  iconName,
}) => {
  return (
    <ButtonContainer
      onPress={onPress}
      mainColor={mainColor}
      accentColor={accentColor}
    >
      <ButtonBorder mainColor={mainColor}>
        <ButtonContent accentColor={accentColor} mainColor={mainColor}>
          <ButtonText textColor={textColor}>{text}</ButtonText>
          <FontAwesome name={iconName} />
        </ButtonContent>
      </ButtonBorder>
    </ButtonContainer>
  );
};

export default CircleButtons;
