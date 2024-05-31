import { createContext, useContext, useState } from "react";

export enum Type {
  Home,
  IPA,
}

const charsContext = createContext<{
  ChangeType: () => void;
  GetType: () => Type;
}>({
  ChangeType: () => {},
  GetType: () => Type.Home,
});

export const CharsContext = ({ children }: { children: React.ReactNode }) => {
  const [currentType, setCurrentType] = useState<Type>(Type.Home);

  const ChangeType = () => {
    if (Type.Home == currentType) {
      setCurrentType(Type.IPA);
    } else {
      setCurrentType(Type.Home);
    }

    ResetAnimationFallback();
  };

  const ResetAnimationFallback = () => {
    document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
    });
  };

  const GetType = (): Type => {
    return currentType;
  };

  return (
    <charsContext.Provider value={{ ChangeType, GetType }}>
      {children}
    </charsContext.Provider>
  );
};

export const useCharsContext = () => {
  return useContext(charsContext);
};
