import React, { useEffect, useRef, useState } from "react";
import { UserObject } from "../models/data.model";
import styled from "styled-components";
// import { Name, Picture, RedCircle, RowItem, ScoreText } from "../App.styles";
interface RowComponentProps {
  data: UserObject;
  rank: number;
}

const RowComponent: React.FC<RowComponentProps> = ({ data, rank }) => {
  const prevProps = useRef<number>(rank);
  const { userID, displayName, score, picture } = data;

  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [translateY, setTranslateY] = useState<string>("0");

  useEffect(() => {
    if (rank !== prevProps.current) {
      const direction = rank < prevProps.current ? "-100%" : "100%";
      setTranslateY(direction);
      setIsTransitioning(true);

      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
        setTranslateY("0");
      }, 300);
      return () => clearTimeout(transitionTimeout);
    }

    return () => {
      prevProps.current = rank;
    };
  }, [rank]);

  return (
    <Row transitioning={isTransitioning} translatey={translateY}>
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
const Row = styled.div<{ transitioning: boolean; translatey: string }>`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
  transition: transform 0.4s ease-in-out;
  transform: ${({ transitioning, translatey }) =>
    transitioning ? `translateY(${translatey})` : "none"};
`;

const RankCircle = styled.div<{ rank: number }>`
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
