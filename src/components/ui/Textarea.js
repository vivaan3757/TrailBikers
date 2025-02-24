// src/components/ui/Textarea.js
import React from "react";

const Textarea = ({ ...props }) => {
  return <textarea className="border rounded p-2 w-full" {...props} />;
};

export default Textarea;
