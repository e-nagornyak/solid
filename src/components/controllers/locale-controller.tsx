import {
  listOfLocalesArray,
  listOfLocalesEnum,
  listOfLocalesKeys,
} from "@/components/constants/locales.tsx";
import { useState } from "react";
import { Text } from "@/components/ui/text.tsx";

export function LocaleController() {
  const [selectedLocale, setSelectedLocale] = useState<listOfLocalesKeys>(
    listOfLocalesEnum.ua,
  );

  return (
    <div className={"w-full flex justify-end"}>
      <div className="flex gap-4">
        {listOfLocalesArray?.map(({ key, displayName }) => (
          <button className="" onClick={() => setSelectedLocale(key)} key={key}>
            <Text
              color={selectedLocale === key ? "default" : "gray-50"}
              size="sm"
              weight="bold"
              leading={6}
            >
              {displayName}
            </Text>
          </button>
        ))}
      </div>
    </div>
  );
}
