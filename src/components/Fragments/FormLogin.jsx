import Button from "../Elements/Button";
import InputForm from "../Elements/input/INDEX.JSX";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm type="email" placeholder="agung@Gmail.com" label="Email" name="email" />
      <InputForm type="password" placeholder="*****" label="Password" name="password" />

      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};
export default FormLogin;
