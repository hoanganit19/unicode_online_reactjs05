import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({}, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
      get value() {
        return inputRef.current.value;
      },
      set value(val) {
        inputRef.current.value = val;
      },
    };
  });
  return (
    <div>
      <input type="text" placeholder="Vui lòng nhập..." ref={inputRef} />
    </div>
  );
});
export default Input;
