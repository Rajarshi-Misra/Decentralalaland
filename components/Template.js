import React from "react";
import IconButton from "@material-ui/core/IconButton";
import uuid from "react-uuid";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Template = () => {
  const router = useRouter();
  const createForm = () => {
    const id_ = uuid();
    router.push("/form", "/form/" + id_, { shallow: true });
  };
  return (
    <div className="bg-gray-100 px-52 py-8">
      <div className="text-2xl">Start a new form</div>
      <div onClick={createForm}>
        <IconButton>
          <div>
            <img
              src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
              className="border-8"
            />
          </div>
        </IconButton>
      </div>
    </div>
  );
};

export default Template;
