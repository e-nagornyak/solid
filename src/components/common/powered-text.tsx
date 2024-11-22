import { Text } from "@/components/ui/text.tsx";
import { Logo } from "@/components/shared/logo.tsx";

export function PoweredText() {
  return (
    <div className={"w-full flex items-end gap-1 justify-center"}>
      <Text size="sm" weight="bold" color="gray-300">
        Powered by
      </Text>
      <Logo />
    </div>
  );
}
