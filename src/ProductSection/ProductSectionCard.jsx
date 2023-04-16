import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import ButtonComponent from "../Component/ResuableComponent/Button";

function ProductSectionCard({ id, description, category, image, price }) {
  return (
    <>
      <Card>
        <CardHeader  className="relative  flex justify-center">
          <img src={image} alt="img-blur-shadow" className="my-image" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {category}
          </Typography>
          <Typography>
           {description.slice(0,50)}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{Math.floor(price)} Rs</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Barcelona, Spain
          </Typography>
        </CardFooter>
        <ButtonComponent
        title="Add to Cart"
        customStyle={"w-[80%] m-auto mb-2 rounded-lg"}
        />
      </Card>
    </>
  );
}

export default ProductSectionCard;
