import { Container } from "@/components/common/container.tsx";
import { LocaleController } from "@/components/controllers/locale-controller.tsx";
import { PaymentPageController } from "@/components/controllers/payment-page-controller.tsx";
import { PoweredText } from "@/components/common/powered-text.tsx";

export function PaymentPage() {
  return (
    <Container minFullScreen>
      <div className="flex flex-col flex-1 justify-between">
        <div className="space-y-4">
          <LocaleController />
          <PaymentPageController />
        </div>
        <PoweredText />
      </div>
    </Container>
  );
}
