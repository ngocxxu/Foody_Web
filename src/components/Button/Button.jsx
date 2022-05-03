import React from "react";

const ButtonCustom1 = ({ textButton, ...props }) => {
  return (
    <>
      <button className="border-white border text-white text-xs font-bold  rounded-full px-7 py-3 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-black ease-out duration-300">
        {textButton}
      </button>
    </>
  );
};

const ButtonCustom2 = ({ textButton, ...props }) => {
  return (
    <>
      <button className="border-white border text-white text-xs font-bold  rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
};

const ButtonBigCustom3 = ({ textButton, ...props }) => {
  return (
    <>
      <button className="border-white border text-white text-base font-bold  rounded-full px-8 py-4 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
};

const ButtonCustom4 = ({ textButton, ...props }) => {
  return (
    <>
      <button className="border-black border text-black text-xs font-bold  rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
};

const ButtonCustom5 = ({ textButton, ...props }) => {
  return (
    <>
      <button className="border-[#a0a0a0] border text-[#f1252b] text-xs font-bold  rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
};

const ButtonBigCustom6 = ({ textButton, ...props }) => {
  return (
    <>
      <button className="bg-[#f1252b] border text-white text-base font-bold  rounded-full px-8 py-4 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
};

const ButtonCustom7 = ({ textButton, ...props }) => {
  return (
    <>
      <button className="border-[#a0a0a0] border text-[#b7b4ad] text-xs font-bold  rounded-full px-7 py-3 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-black ease-out duration-300">
        {textButton}
      </button>
    </>
  );
};

const ButtonCustom8 = ({ textButton, ...props }) => {
  return (
    <>
      <button className="border-[#272727] border text-[#272727] text-xs font-bold  rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
};



export {
  ButtonCustom1,
  ButtonCustom2,
  ButtonBigCustom3,
  ButtonCustom4,
  ButtonCustom5,
  ButtonBigCustom6,
  ButtonCustom7,
  ButtonCustom8
};
