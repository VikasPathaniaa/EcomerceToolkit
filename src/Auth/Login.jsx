import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { login } from "../Fetaures/AuthSlice/LoginSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    password: "",
    imgUrl: "",
  };
  const [inputValue, setValue] = useState(initialValues);

  const inputHandel = (event) => {
    const { name, value } = event.target;
    setValue({
      ...inputValue,
      [name]: value,
    });
  };
  const submitHandel = () => {
    console.log("submit", inputValue.name);

    if (!inputValue?.name || !inputValue.password) {
     toast.error("Please Fill All Fields " , {
      duration:3000 ,
      position:"top-center"
     })
    } else {
      dispatch(login(inputValue));
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="user@123"
            size="lg"
            type="text"
            onChange={inputHandel}
            name="name"
            value={inputValue.name}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            onChange={inputHandel}
            name="password"
            value={inputValue.password}
          />
          <Input
            label="Paste Image Url "
            size="lg"
            type="text"
            onChange={inputHandel}
            name="imgUrl"
            value={inputValue.imgUrl}
          />
          {/* <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div> */}
        </CardBody>
        <CardFooter className="pt-0">
          <Button fullWidth onClick={submitHandel}>
            Sign In
          </Button>
          <Typography variant="small" className="ml-1 p-5 text-center">
            Img Url Optional
          </Typography>
          <Typography variant="small" className="mt-2 flex justify-center">
            Don't have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
