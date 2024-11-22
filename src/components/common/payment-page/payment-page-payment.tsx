import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Title } from "@/components/ui/title.tsx";
import { Text } from "@/components/ui/text.tsx";
import { AppleIcon } from "@/components/shared/icons/apple-icon.tsx";
import { useState } from "react";

interface PaymentPagePaymentProps {
  info: string;
  description: string;
  product: { subtitle: string; title: string };
  price: { price: string; discount: string };
  total_to_pay: number;
  currency: string;
  onPayByApple: () => Promise<void>;
}

export function PaymentPagePayment({
  price,
  onPayByApple,
}: PaymentPagePaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayByApple = async () => {
    setIsProcessing(true);
    await onPayByApple();
  };

  return (
    <div className={""}>
      <div>
        <Title size="lg" leading={"10"} weight="semibold">
          {price?.discount}
        </Title>
        <Text weight="medium">then {price?.price}</Text>
      </div>
      <Button
        isProcessing={isProcessing}
        onClick={handlePayByApple}
        className="w-full my-6"
        color="black"
      >
        <AppleIcon className="size-3.5 text-white" />
        Pay
      </Button>
      <Separator className="mb-4">or pay with card</Separator>
    </div>
  );
}
