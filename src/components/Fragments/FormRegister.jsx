import Button from "../Elements/Button";
import InputForm from "../Elements/input/INDEX.JSX";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm type="text" placeholder="insert your fullname" label="Full Name" name="fullname" />
      <InputForm type="email" placeholder="agung@gmail.com" label="Email" name="email" />
      <InputForm type="password" placeholder="*****" label="Password" name="password" />
      <InputForm type="password" placeholder="*****" label="Confirm Password" name="password" />

      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
