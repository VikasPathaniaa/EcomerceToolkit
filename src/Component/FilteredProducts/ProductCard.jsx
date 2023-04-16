import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import { Link, useParams } from "react-router-dom";
const ProductCard = ({ img, category, id, title, price }) => {
  const { type } = useParams();
  return (
    <Link to={`/product/${type}/${id}`}>
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={img} alt="profile-picture"  className="my-image" style={{margin:"auto"}} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {id}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            {title.slice(0,20)}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              {category}
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              {price}
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      {/* <Card className="w-96 flex flex-col px-1 mx-32 shadow-lg">
        <CardHeader className="relative h-56">
          <img
            src={img}
            alt="img-blur-shadow"
            className="h-full w-full object-contain shadow-lg shadow-blue-500/50 rounded-[40px] "
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {id}
          </Typography>
          <Typography>{title.slice(0,20)}...</Typography>
        </CardBody>
        <CardFooter divider className="flex justify-around py-3">
          <Typography variant="small">{category}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Rs.{price}
          </Typography>
        </CardFooter>
      </Card> */}
    </Link>
  );
};

export default ProductCard;
