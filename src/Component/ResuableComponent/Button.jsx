import React from "react";
import { Button } from "@material-tailwind/react";
const ButtonComponent = ({ title, customStyle, onClick }) => {
  return (
    <Button className={customStyle} onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
