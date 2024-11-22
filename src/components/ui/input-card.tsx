import React from "react";

import { Input, InputProps } from "@/components/ui/input.tsx";

const InputCardNumber = React.forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, value, placeholder = "1234 1234 1234 1234", ...props }, ref) => {
    const formatCardNumber = (input: string) => {
      const digitsOnly = input.replace(/\D/g, "");
      return digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = e.target.value.replace(/\s/g, "");
      onChange?.(e);
    };

    return (
      <Input
        ref={ref}
        onChange={handleInputChange}
        maxLength={19}
        inputMode="numeric"
        placeholder={placeholder}
        value={formatCardNumber(value?.toString() || "")}
        {...props}
      />
    );
  },
);

InputCardNumber.displayName = "CardInput";

export { InputCardNumber };
