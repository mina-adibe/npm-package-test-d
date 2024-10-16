// src/components/Button/Button.tsx
import React from "react";
var Button = ({ label, onClick, primary = false, disabled = false, className = "" }) => {
  const baseClass = "reusable-button";
  const combinedClassName = `${baseClass} 
        ${primary ? "primary" : "secondary"} 
        ${disabled ? "disabled" : ""} 
        ${className}`;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: combinedClassName,
      onClick: !disabled ? onClick : void 0,
      disabled
    },
    label
  );
};
var Button_default = Button;

// src/components/Button2/Button.tsx
import React2 from "react";
var Button2 = ({ label, onClick, primary = false, disabled = false, className = "" }) => {
  const baseClass = "reusable-button";
  const combinedClassName = `${baseClass} 
        ${primary ? "primary" : "secondary"} 
        ${disabled ? "disabled" : ""} 
        ${className}`;
  return /* @__PURE__ */ React2.createElement(
    "button",
    {
      className: combinedClassName,
      onClick: !disabled ? onClick : void 0,
      disabled
    },
    label
  );
};
var Button_default2 = Button2;
export {
  Button_default as Button,
  Button_default2 as Button2
};
