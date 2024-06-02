import { createContext, useContext } from "react";

const frecuencyContext = createContext<{
  UpdateFrequency: (char: string) => void;
  GetCharFrequency: () => any;
  SortCharsByFrequency: () => string[];
}>({
  UpdateFrequency: () => {},
  GetCharFrequency: () => {},
  SortCharsByFrequency: (): string[] => {
    return [];
  },
});

export const FrecuencyContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const GetCharFrequency = () => {
    return JSON.parse(localStorage.getItem("charFrequency") || "{}");
  };

  const UpdateFrequency = (char: string) => {
    const charFrequency = GetCharFrequency();
    charFrequency[char] = (charFrequency[char] || 0) + 1;
    localStorage.setItem("charFrequency", JSON.stringify(charFrequency));
  };

  const SortCharsByFrequency = (): string[] => {
    const charFrequency = GetCharFrequency();
    return Object.keys(charFrequency).sort(
      (a, b) => charFrequency[b] - charFrequency[a],
    );
  };

  return (
    <frecuencyContext.Provider
      value={{ UpdateFrequency, GetCharFrequency, SortCharsByFrequency }}
    >
      {children}
    </frecuencyContext.Provider>
  );
};

export const useFrencuencyContext = () => {
  return useContext(frecuencyContext);
};
