import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { InputCardNumber } from "@/components/ui/input-card.tsx";
import InputExpirationDate from "@/components/ui/input-data.tsx";
import InputCVC from "@/components/ui/input-cvc.tsx";
import { Button } from "@/components/ui/button.tsx";

const formSchema = z.object({
  card_number: z
    .string()
    .min(16, "Card number must be exactly 16 digits.")
    .max(16, "Card number must be exactly 16 digits.")
    .regex(/^\d+$/, "Card number must contain only digits."),
  expiration_date: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in MM/YY format.",
    ),
  cvc: z
    .string()
    .length(3, "CVC must be exactly 3 digits.")
    .regex(/^\d+$/, "CVC must contain only digits."),
});

export type PaymentPageFormData = z.infer<typeof formSchema>;

interface PaymentPageFormProps {
  onSubmit: SubmitHandler<PaymentPageFormData>;
  totalToPay: number;
  currency: string;
}

export function PaymentPageForm({
  onSubmit,
  currency,
  totalToPay,
}: PaymentPageFormProps) {
  const form = useForm<PaymentPageFormData>({
    resolver: zodResolver(formSchema),
  });

  const {
    control,
    formState: { isSubmitting },
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="card_number"
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <FormItem className="mb-3">
              <FormLabel>Card Number</FormLabel>
              <FormControl>
                <InputCardNumber error={!!error?.message} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap gap-2 mb-4">
          <FormField
            control={control}
            name="expiration_date"
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <FormItem className="grow basis-32">
                <FormLabel>Expiration Date</FormLabel>
                <FormControl>
                  <InputExpirationDate error={!!error?.message} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="cvc"
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <FormItem className="grow basis-32">
                <FormLabel>CVC</FormLabel>
                <FormControl>
                  <InputCVC error={!!error?.message} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button isProcessing={isSubmitting} type="submit" className="w-full">
          Pay {totalToPay?.toFixed(2)} {currency}
        </Button>
      </form>
    </Form>
  );
}
