import React from "react";

type TLabelProps = {
  inputId: string;
  labelText: string;
  required: boolean;
};

function FormLabel({ inputId, labelText, required = false }: TLabelProps) {
  return (
    <label
      className="font-medium mb-1 flex items-center gap-1 capitalize"
      htmlFor={inputId}
    >
      {required && (
        <span className="pt-1 pointer-events-none text-red-500">*</span>
      )}
      <span>{labelText}</span>
    </label>
  );
}

export default FormLabel;
