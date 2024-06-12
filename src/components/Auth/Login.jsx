import Input from "./Input";
export default function Login() {
  return (
    <form>
      <h2>Login</h2>
      <Input type="email" label="Email" name="email" />
      <Input type="password" label="Password" name="password" />
      <button>Submit</button>
    </form>
  );
}
