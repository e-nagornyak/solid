const listOfLocalesEnum = {
  en: "en",
  ua: "ua",
} as const;

type listOfLocalesKeys = keyof typeof listOfLocalesEnum;

const listOfLocalesMap: {
  [key in listOfLocalesKeys]: {
    key: listOfLocalesKeys;
    displayName: string;
  };
} = {
  en: {
    key: "en",
    displayName: "Eng",
  },
  ua: {
    key: "ua",
    displayName: "Укр",
  },
};

const listOfLocalesArray = Object.values(listOfLocalesMap);

export {
  listOfLocalesMap,
  listOfLocalesArray,
  listOfLocalesEnum,
  type listOfLocalesKeys,
};
