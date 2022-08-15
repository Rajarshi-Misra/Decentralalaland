import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Centredtabs from "../components/Tabs";
import Question_Form from "../components/Question_Form";

const form = () => {
  return (
    <div className="text-3xl ">
      <div className="flex justify-between bg-gray-300 px-16 py-8">
        <div>Untitled Form</div>

        <div className="flex justify-around">
          <Button variant="contained" color="primary">
            SEND
          </Button>
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
      </div>
      <Centredtabs />
      <Question_Form />
    </div>
  );
};

export default form;
