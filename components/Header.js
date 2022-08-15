import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="flex w-full justify-between px-16 py-4 text-xl items-center sticky h-32 bg-gray-300">
      <div className="items-center text-4xl">
        <IconButton>
          <MenuIcon />
        </IconButton>
        RAPTURES FORM
      </div>
      <div>
        {" "}
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type="text"
          name="search"
          className=" border-2 border-black h-12 text-center"
          placeholder="Search For Your Form"
        />
      </div>
      <div>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
