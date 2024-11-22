import { BackButton } from "@/components/shared/back-button.tsx";
import { PaymentPageSummary } from "@/components/common/payment-page/payment-page-summary.tsx";
import {
  PaymentPageForm,
  PaymentPageFormData,
} from "@/components/common/payment-page/payment-page-form.tsx";
import { PaymentPagePayment } from "@/components/common/payment-page/payment-page-payment.tsx";
import { useNavigate } from "react-router-dom";
import { routes } from "@/lib/routes.ts";

const mockData = {
  order: {
    // &lt;=
    info: "<= 100 char.",
    description: "<= 400 char.",
    total_to_pay: 299.99,
    currency: "UAH",
    product: {
      title: "Lamel Professional Smart Skin Compact Powder",
      subtitle: "Пудра для лиця",
    },
    price: {
      discount: "5 days free",
      price: `99.99 UAH per 14 days`,
    },
  },
} as any;

export function PaymentPageController() {
  const navigate = useNavigate();

  const handlePay = async ({
    cvc,
    expiration_date,
    card_number,
  }: PaymentPageFormData) => {
    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          console.log(cvc, expiration_date, card_number);
          resolve(null);
        }, 2000),
      );
      navigate(routes.success);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePayByApple = async () => {
    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(null);
        }, 2000),
      );
      navigate(routes.success);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={"flex flex-col lg:flex-row gap-8"}>
      <div className="size-full">
        <BackButton>Checkout</BackButton>
        <PaymentPagePayment
          onPayByApple={handlePayByApple}
          {...mockData?.order}
        />
        <PaymentPageForm
          onSubmit={handlePay}
          totalToPay={mockData?.order?.total_to_pay}
          currency={mockData?.order?.currency}
        />
      </div>

      <PaymentPageSummary {...mockData?.order} />
    </div>
  );
}
