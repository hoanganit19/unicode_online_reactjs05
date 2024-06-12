import Input from "./Input";

export default function Register() {
  return (
    <form>
      <h2>Register</h2>
      <Input type="text" label="Name" name="name" />
      <Input type="email" label="Email" name="email" />
      <Input type="password" label="Password" name="password" />
      <button>Submit</button>
    </form>
  );
}
