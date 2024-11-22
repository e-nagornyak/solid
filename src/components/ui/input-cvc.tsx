import React, { useState } from "react";
import { Info } from "lucide-react";
import { Input, InputProps } from "@/components/ui/input.tsx";

export const InputCVC = React.forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, ...props }, ref) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = e.target.value.replace(/\D/g, "");
      onChange?.(e);
    };

    return (
      <div className="relative flex items-center w-full">
        <Input
          ref={ref}
          type="text"
          maxLength={3}
          placeholder="•••"
          inputMode="numeric"
          onChange={handleInputChange}
          {...props}
        />

        <div
          className="absolute right-3 flex items-center justify-center w-6 h-6 text-gray-500 cursor-pointer"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          <Info size={18} />

          {tooltipVisible && (
            <div className="absolute top-[-40px] right-0 w-48 p-2 text-sm text-white bg-gray-800 rounded-md shadow-lg">
              The CVC is the three-digit code on the back of your card.
            </div>
          )}
        </div>
      </div>
    );
  },
);

InputCVC.displayName = "InputCVC";

export default InputCVC;
