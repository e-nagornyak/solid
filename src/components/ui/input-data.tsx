import React from "react";
import { Input, InputProps } from "@/components/ui/input.tsx";

export const InputExpirationDate = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ onChange, ...props }, ref) => {
  const formatExpirationDate = (input: string) => {
    const digitsOnly = input.replace(/\D/g, "");
    if (digitsOnly.length <= 2) return digitsOnly;
    return digitsOnly.slice(0, 2) + "/" + digitsOnly.slice(2, 4);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatExpirationDate(e.target.value);
    onChange?.(e);
  };

  return (
    <Input
      ref={ref}
      type="text"
      maxLength={5}
      placeholder="MM/YY"
      onChange={handleInputChange}
      inputMode="numeric"
      {...props}
    />
  );
});

InputExpirationDate.displayName = "InputExpirationDate";

export default InputExpirationDate;
