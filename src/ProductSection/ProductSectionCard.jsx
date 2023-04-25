import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import ButtonComponent from "../Component/ResuableComponent/Button";
import {useDispatch} from "react-redux";
import { addToCart } from "../Fetaures/CartSlice/cartSlice";

function ProductSectionCard({ id, description, category, image, price , title }) {
  const dispatch = useDispatch()
  return (
    <>
      <Card className="my-10">
        <CardHeader className="relative  flex justify-center">
          <img src={image} alt="img-blur-shadow" className="my-image" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {category}
          </Typography>
          <Typography>{description.slice(0, 50)}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{Math.floor(price)} Rs</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Barcelona, Spain
          </Typography>
        </CardFooter>
        <div className="w-[80%] mx-auto text-center">
        <a href="#home">
        <ButtonComponent
          title="Add to Cart"
          customStyle={"w-[80%] mx-auto mb-2 rounded-lg"}
          onClick={() => {
            dispatch(
              addToCart({
                id: id,
                price: price,
                amount: 1,
                totalPrice: price,
                img:image,
                title:title,
              })
            );
          }}
        />
        </a>
        </div>
      </Card>
    </>
  );
}

export default ProductSectionCard;
