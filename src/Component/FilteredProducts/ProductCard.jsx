import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const ProductCard = ({ img, category, id, title }) => {
  return (
    <Card className="w-96 flex flex-col px-1 mx-32">
      <CardHeader color="blue" className="relative h-56">
        <img src={img} alt="img-blur-shadow" className="h-full w-full" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {id}
        </Typography>
        <Typography>{title}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{category}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
