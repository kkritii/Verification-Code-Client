import { useNavigate } from "react-router-dom";
import { createRef, useEffect, useRef, useState } from "react";

import { verifyCode } from "../services/verifyCode";

const Key = {
  Backspace : 8,
  Delete    : 46
}

export default function VerificationForm({ inputLength }) {
  const inputRefs             = useRef([]);
  const navigate              = useNavigate();
  const [code, setCode]       = useState([]);
  const [error, setError]     = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const inputComponents = Array.from(Array(inputLength).keys());

  useEffect(() => {
    let codeString = code.join('');
    setIsValid(codeString.length === 6 && !isNaN(codeString));
  },[code]);

  const isBackKey = (keyCode) => keyCode === Key.Backspace || keyCode === Key.Delete;

  const handleInputChange = (event, index) => {
    const input     = event.target;
    const prevInput = inputRefs.current[index - 1];
    const nextInput = inputRefs.current[index + 1];

    if (isNaN(input.value) || !input.value.trim()) {
      input.classList.add("invalid");
      input.classList.remove("success");
    } else if (input.value.trim()) {
      input.classList.remove("invalid");
      input.classList.add("success");
    } else {
      input.classList.remove("invalid", "success");
    }

    const newCode = [...code];
    newCode[index] = input.value;
    setCode(newCode);

    if (!input.value) {
      if (prevInput) {
        prevInput.select();
      }
    } else if (nextInput) {
      nextInput.select();
    } 
  };

  const handleFocus = (event) => {
    event.target.select();
  }

  const handleKeyDown = (event, index) => {
    const input = event.target;
    const prevInput = inputRefs.current[index - 1];

    if (isBackKey(event.keyCode) && !input.value) {
      event.preventDefault();
      const newCode = code.slice(0, index).concat(code.slice(index + 1));
      setCode(newCode);

      if (prevInput) {
        prevInput.current.focus();
      }
    }
  };

  const handlePaste = (event) => {
    const pastedCode = event.clipboardData.getData("text");
    const truncatedCode = pastedCode.slice(0, 6);
    setCode(truncatedCode.split(''));

    inputRefs.current.forEach((inputRef, index) => {
      if(isNaN(pastedCode.charAt(index)) || !pastedCode.charAt(index).trim()) {
        inputRef.className += " invalid";
      } else {
        inputRef.className += " success";
      }
    });
  };

  const handleRetry = () => {
    setError('');
    setCode([]);
  }

  const handleSubmit = async () => {
    const verificationCode = code.join("");
    setLoading(true);

    try {
      await verifyCode({ verificationCode });
      navigate(`/success?code=${verificationCode}`)
    } catch (error) {
      setError(error.message);
      inputRefs.current.forEach(inputRef => inputRef.classList.remove("success"));
    }

    setLoading(false);
  }

  return (
    <>
      <div className="flex justify-center gap-1">
        {inputComponents.map(index => (
          <input
            key={index}
            maxLength={1}
            className="input-box"
            autoFocus={index === 0}
            value={code[index] || ''}
            disabled={loading || error}
            onPaste={handlePaste}
            onFocus={handleFocus}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onChange={(e) => handleInputChange(e, index)}
            ref={ref => inputRefs.current[index] = ref ?? createRef()}
          />
        ))}
      </div>

      <div className="text-center">
        {error ?
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={handleRetry}
          >
            Retry
          </button> :
          <button
            type="submit"
            className="btn"
            onClick={handleSubmit}
            disabled={loading || !isValid}
          >
            Submit
          </button>}
      </div>

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}
    </>
  );
}
