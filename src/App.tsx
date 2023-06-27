import React, { useEffect, useState } from "react";
import { UserObject } from "./models/data.model";
import RowComponent from "./components/RowComponent";
import { AppContainer, CardContainer } from "./App.styles";

const generateRandomCount = () => Math.floor(Math.random() * 1000);

const initialUsersData: UserObject[] = [
  {
    userID: "u-1",
    displayName: "Jone",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-2",
    displayName: "Victoria",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-3",
    displayName: "Joy",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-4",
    displayName: "Quinn",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-5",
    displayName: "Sheenalo",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-6",
    displayName: "Charlene",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-7",
    displayName: "LeonaBaby",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-8",
    displayName: "Sunny",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-9",
    displayName: "ImWord",
    picture: "",
    score: generateRandomCount(),
  },
  {
    userID: "u-10",
    displayName: "Dophine",
    picture: "",
    score: generateRandomCount(),
  },
];

const App: React.FC = () => {
  const [currentUserData, setCurrentUserData] =
    useState<UserObject[]>(initialUsersData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserData((prevData) =>
        prevData.map((user) => ({
          ...user,
          score: user.score + generateRandomCount(),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const sortedData = [...currentUserData].sort((a, b) => b.score - a.score);
  return (
    <AppContainer>
      <CardContainer>
        {sortedData.map((userData, index) => (
          <RowComponent
            key={userData.userID}
            rank={index + 1}
            data={userData}
          />
        ))}
      </CardContainer>
    </AppContainer>
  );
};

export default App;
