import { useId } from "react";

export default function Input({ type = "text", label, name, value, onChange }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={`${label}...`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
