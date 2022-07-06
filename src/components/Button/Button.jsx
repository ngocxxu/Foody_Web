import React from 'react';
import { memo } from 'react';

const ButtonCustom1 = memo(({ textButton, ...props }) => {
  return (
    <>
      <button className="border-white border text-white text-xs font-bold rounded-full px-7 py-3 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-black ease-out duration-300">
        {textButton}
      </button>
    </>
  );
});

const ButtonCustom2 = memo(({ textButton, ...props }) => {
  return (
    <>
      <button className="border-white border text-white text-xs font-bold rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
});

const ButtonBigCustom3 = memo(({ textButton, ...props }) => {
  return (
    <>
      <button className="border-white border text-white text-base font-bold rounded-full px-8 py-4 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
});

const ButtonCustom4 = memo(({ textButton, ...props }) => {
  return (
    <>
      <button className="border-black border text-black text-xs font-bold rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
});

const ButtonCustom5 = memo(({ textButton, ...props }) => {
  return (
    <>
      <button className="border-[#a0a0a0] border text-[#f1252b] text-xs font-bold rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300">
        {textButton}
      </button>
    </>
  );
});

const ButtonBigCustom6 = memo(({ textButton, className, ...props }) => {
  return (
    <>
      <button
        className={`bg-[#f1252b] border text-white text-base font-bold rounded-full px-8 py-4 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-white ease-out duration-300 ${className}`}
      >
        {textButton}
      </button>
    </>
  );
});

const ButtonCustom7 = memo(({ textButton, ...props }) => {
  return (
    <>
      <button className="border-[#a0a0a0] border text-[#b7b4ad] text-xs font-bold rounded-full px-7 py-3 hover:border-[#ffb219] hover:bg-[#ffb219] hover:text-black ease-out duration-300">
        {textButton}
      </button>
    </>
  );
});

const ButtonCustom8 = memo(({ textButton, className, onClick,...props }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`border-[#272727] border text-[#272727] text-[10px] lg:text-xs font-bold rounded-full px-2 lg:px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300 ${className}`}
      >
        {textButton}
      </button>
    </>
  );
});

const ButtonCustom9 = memo(({ textButton, className, ...props }) => {
  return (
    <>
      <button
        className={`bg-[#a0a0a0] border-[#a0a0a0] border text-white text-xs font-bold rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300 ${className}`}
      >
        {textButton}
      </button>
    </>
  );
});

const ButtonCustom10 = memo(({ textButton, className, ...props }) => {
  return (
    <>
      <button
        className={`w-full border-black border text-xs font-bold rounded-full px-7 py-3 hover:border-[#f1252b] hover:bg-[#f1252b] hover:text-white ease-out duration-300 ${className}`}
      >
        {textButton}
      </button>
    </>
  );
});

const ButtonCustom11 = memo(({ textButton, className, ...props }) => {
  return (
    <>
      <button
        className={`hover:border-[#272727] border hover:text-[#272727] text-xs font-bold rounded-full hover:bg-transparent bg-black px-7 py-3 text-white ease-out duration-300 ${className}`}
      >
        {textButton}
      </button>
    </>
  );
});

export {
  ButtonCustom1,
  ButtonCustom2,
  ButtonBigCustom3,
  ButtonCustom4,
  ButtonCustom5,
  ButtonBigCustom6,
  ButtonCustom7,
  ButtonCustom8,
  ButtonCustom9,
  ButtonCustom10,
  ButtonCustom11,
};
