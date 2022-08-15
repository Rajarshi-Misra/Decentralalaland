import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Centredtabs = () => {
  return (
    <div className="text-6xl">
      <Paper>
        <Tabs centered indicateColor="blue">
          <Tab label="Questions" className="text-3xl"></Tab>
          <Tab label="Responses" className="text-3xl"></Tab>
        </Tabs>
      </Paper>
    </div>
  );
};

export default Centredtabs;
