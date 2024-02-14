import Button from "../Elements/Button";
import InputForm from "../Elements/input/INDEX.JSX";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";

    console.log("Login kuy");
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" placeholder="agung@Gmail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="*****" name="password" />

      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
export default FormLogin;
