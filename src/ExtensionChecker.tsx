import React from "react";

export interface ExtensionCheckerProps {
  message: string;
}

export const ExtensionChecker: React.FC<ExtensionCheckerProps> = ({
  message,
}) => {
  return <div style={{ color: "blue", fontWeight: "bold" }}>{message}</div>;
};
