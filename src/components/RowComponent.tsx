import React from "react";
import { UserData } from "../models/data.model";

interface RowComponentProps {
  data: UserData;
}

const RowComponent: React.FC<RowComponentProps> = ({ data }) => {
  const { userID, displayName, score, picture } = data;

  return <div key={userID}>{displayName}</div>;
};

export default RowComponent;
