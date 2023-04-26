import React from "react";
import { Button } from "@material-tailwind/react";
const ButtonComponent = ({ title, customStyle, onClick, icon }) => {
  return (
    <Button className={customStyle} onClick={onClick}>
      {icon} {title}
    </Button>
  );
};

export default ButtonComponent;
