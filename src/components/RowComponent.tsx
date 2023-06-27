import React from "react";
import { UserObject } from "../models/data.model";
import styled from "styled-components";
// import { Name, Picture, RedCircle, RowItem, ScoreText } from "../App.styles";
interface RowComponentProps {
  data: UserObject;
  rank: number;
}

interface CircleProps {
  rank: number;
}

const RowComponent: React.FC<RowComponentProps> = ({ data, rank }) => {
  const { userID, displayName, score, picture } = data;

  return (
    <Row>
      <RankCircle rank={rank}>
        <span>{rank}</span>
      </RankCircle>
      <Picture />
      <Name>{displayName}</Name>
      <RightText>{score}pt</RightText>
    </Row>
  );
};

// Styled components
const Row = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 10px;
`;

const RankCircle = styled.div<CircleProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ rank }) => {
    if (rank === 1) return "red";
    if (rank === 2) return "#E76900";
    if (rank === 3) return "orange";
    return "#83ABEA";
  }};
  color: white;
  margin-right: 10px;
`;

const Picture = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #d6d6d6;
  color: white;
`;

const Name = styled.div`
  margin-left: 10px;
`;

const RightText = styled.div`
  color: red;
  margin-left: auto;
`;
export default RowComponent;
