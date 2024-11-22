import { Text } from "@/components/ui/text.tsx";
import { Separator } from "@/components/ui/separator.tsx";

interface PaymentPageSummaryProps {
  info: string;
  description: string;
  product: { subtitle: string; title: string };
  price: { price: string; discount: string };
  total_to_pay: number;
  currency: string;
}

export function PaymentPageSummary({
  info,
  description,
  product,
  price,
}: PaymentPageSummaryProps) {
  return (
    <div className="mb-10 size-full rounded-lg bg-secondary p-8">
      <Text className="mb-6" size="lg" leading={6} weight="semibold">
        Order info {info}
      </Text>
      <div className="space-y-4">
        <Text size="sm" leading={6} weight="medium">
          Description {description}
        </Text>
        <Separator />
        <div>
          <Text weight="medium" size="sm">
            {product?.title}
          </Text>
          <Text color="gray-200" size="xs">
            {product?.subtitle}
          </Text>
        </div>
        <Separator />
        <div className="text-end">
          <Text leading={5} weight="semibold">
            {price?.discount}
          </Text>
          <Text size="sm">then {price?.price}</Text>
        </div>
      </div>
    </div>
  );
}
