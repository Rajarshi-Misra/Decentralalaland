import React, { useState, useEffect } from "react";

import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { IconButton, Typography } from "@material-ui/core";

import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import { BsFileText } from "react-icons/bs";
import MenuItem from "@material-ui/core/MenuItem";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import { FcRightUp } from "react-icons/fc";
import CloseIcon from "@material-ui/icons/Close";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { BsTrash } from "react-icons/bs";
import { OndemandVideo } from "@material-ui/icons";

const Question_Form = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which is the capital city of Karnataka?",
      questionType: "radio",
      options: [
        { optionText: "Bengaluru" },
        { optionText: "Belgavi" },
        { optionText: "Hubli" },
        { optionText: "Mandya" },
      ],
      open: true,
      required: false,
    },
  ]);
  function changeQuestion(text, i) {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion);
  }
  function addQuestionType(i, type) {
    let qs = [...questions];
    console.log(type);
    qs[i].questionType = type;
    setQuestions(qs);
  }
  function changeOptionValue(text, i, j) {
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setQuestions(optionsQuestion);
  }
  function removeOption(i, j) {
    var RemoveOptionQuestion = [...questions];
    if (RemoveOptionQuestion[i].options.length > 1) {
      RemoveOptionQuestion[i].options.splice(j, 1);
      setQuestions(RemoveOptionQuestion);
    }
  }
  function addOption(i) {
    var optionsofQuestion = [...questions];
    optionsofQuestion[i].options.push({
      optionText: "Option" + (optionsofQuestion[i].options.length + 1),
    });
    setQuestions(optionsofQuestion);
  }
  function deleteQuestion(i) {
    let qs = [...questions];
    qs.splice(i, 1);
    setQuestions(qs);
  }
  function addMoreQuestionField() {
    setQuestions([
      ...questions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option1" }],
        open: true,
        required: false,
      },
    ]);
  }
  function questionsUI() {
    return questions.map((questions, i) => (
      <div>
        <Accordion
          expanded={questions.open}
          className={questions.open ? "border-2 border-black" : ""}
        >
          <AccordionSummary
            elevation={1}
            aria-controls="panelia-content"
            id="panelia-header"
            style={{ width: "100%" }}
          >
            <div>
              <div className="text-black">
                {i + 1}. {questions.questionText}
              </div>
              {questions.options.map((options, j) => (
                <div key={j}>
                  <div style={{ display: "flex" }}>
                    <FormControlLabel
                      disabled
                      control={
                        <input
                          type={questions.questionType}
                          required={questions.type}
                        />
                      }
                      label={
                        <div className="text-3xl text-black">
                          {questions.options[j].optionText}
                        </div>
                      }
                    ></FormControlLabel>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSummary>
          <div className="flex flex-col">
            <AccordionDetails>
              <div>
                <input
                  type="text"
                  placeholder="Questions"
                  value={questions.questionText}
                  onChange={(e) => {
                    changeQuestion(e.target.value, i);
                  }}
                ></input>
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select>
                  <MenuItem
                    id="text"
                    value="text"
                    onClick={() => {
                      addQuestionType(i, "text");
                    }}
                  >
                    <SubjectIcon />
                    Paragraph
                  </MenuItem>
                  <MenuItem
                    id="checkbox"
                    value="checkbox"
                    onClick={() => {
                      addQuestionType(i, "checkbox");
                    }}
                  >
                    <CheckBoxIcon />
                    Checkboxes
                  </MenuItem>
                  <MenuItem
                    id="radio"
                    value="radio"
                    onClick={() => {
                      addQuestionType(i, "radio");
                    }}
                  >
                    <Radio />
                    Multiple Choice
                  </MenuItem>
                </Select>
              </div>
              {questions.options.map((options, j) => (
                <div className="flex flex-col">
                  <div>
                    {questions.questionType != "text" ? (
                      <input type={questions.questionType} />
                    ) : (
                      <ShortTextIcon />
                    )}
                  </div>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder="option"
                      value={questions.options[j].optionText}
                      onChange={(e) => {
                        changeOptionValue(e.target.value, i, j);
                      }}
                    ></input>
                    <CropOriginalIcon />
                    <IconButton>
                      <CloseIcon
                        onClick={() => {
                          removeOption(i, j);
                        }}
                      />
                    </IconButton>
                  </div>
                </div>
              ))}

              <div>
                <FormControlLabel
                  disabled
                  control={
                    questions.questionType != "text" ? (
                      <input
                        type={questions.questionType}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    ) : (
                      <ShortTextIcon />
                    )
                  }
                  label={
                    <div>
                      <input type="text" placeholder="Add other"></input>
                      <Button
                        size="small"
                        onClick={() => {
                          addOption(i);
                        }}
                      >
                        Add Option
                      </Button>
                    </div>
                  }
                />
              </div>

              <div>
                <div>
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "black",
                      fontSize: "13px",
                    }}
                  >
                    <FcRightUp />
                    Answer Keys
                  </Button>
                </div>
                <div>
                  <IconButton aria-label="Copy">
                    <FilterNoneIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteQuestion(i);
                    }}
                  >
                    <BsTrash />
                  </IconButton>
                </div>
              </div>
            </AccordionDetails>
            <div>
              <AddCircleOutlineIcon onClick={() => addMoreQuestionField()} />
              <OndemandVideoIcon />
              <CropOriginalIcon />
              <TextFieldsIcon />
            </div>
          </div>
        </Accordion>
      </div>
    ));
  }
  return (
    <div className=" w-2/3 mx-auto">
      <div className="text-center pt-4 bg-gray-100">
        <div>
          <input
            className="border-2 text-left my-2 text-6xl"
            type="text"
            placeholder="Untitled Document"
          ></input>
        </div>
        <div>
          {" "}
          <input
            className="border-2 text-left my-2 text-3xl"
            type="text"
            placeholder="Form Description"
          ></input>
        </div>
      </div>
      {questionsUI()}
    </div>
  );
};

export default Question_Form;
