import { useState, useEffect } from "react";

export default function useSmartState(initialValue) {
  const [value, setValue] = useState(initialValue);

  const updateValue = (initialValue) => {
    setValue(initialValue);
  };

  useEffect(() => {
    updateValue(initialValue);
  }, [initialValue]);

  return [value, setValue];
}
