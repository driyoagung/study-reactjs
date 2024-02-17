import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, placeholder, type, name } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}> {label}</Label>
      <Input type={type} placeholder={placeholder} id={name} name={name} ref={ref}></Input>
    </div>
  );
});

export default InputForm;
