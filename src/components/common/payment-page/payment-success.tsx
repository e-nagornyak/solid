import { CheckCircle } from "lucide-react";
import { Container } from "@/components/common/container.tsx";
import { Title } from "@/components/ui/title.tsx";
import { Text } from "@/components/ui/text.tsx";
import { Link } from "react-router-dom";
import { routes } from "@/lib/routes.ts";

export function PaymentSuccess() {
  return (
    <Container minFullScreen>
      <div className="flex flex-col flex-1 justify-center items-center space-y-6">
        <CheckCircle className="text-green-500" size={80} />
        <Title weight="semibold" size="2xl">
          The payment was successful!
        </Title>
        <Text size="xl" className="text-center">
          Thank you for your payment.
        </Text>
        <Link
          to={routes.payment}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to payment
        </Link>
      </div>
    </Container>
  );
}
