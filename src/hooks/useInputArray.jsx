import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    const inputValue = e.target.value;
    setText(inputValue.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("すでに同じ値が存在します！！");
        return prevArray;
      }
      if (text === "") {
        alert("入力されていません！！！");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      setText("");
      return newArray;
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
