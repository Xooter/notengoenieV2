import { useState } from "react";
import { HomeIcon } from "./HomeIcon";
import { IpaIcon } from "./IpaIcon";

enum Type {
  Home,
  IPA,
}

export const TypeButton = () => {
  const [currentType, setCurrentType] = useState<Type>(Type.Home);

  const ChangeType = () => {
    if (Type.Home == currentType) {
      setCurrentType(Type.IPA);
    } else {
      setCurrentType(Type.Home);
    }
  };

  return (
    <button
      onClick={ChangeType}
      className="dark:border-primary-dark dark:bg-background-dark
      border-primary bg-primary
      transition-transform 
      group
      shadow-md shadow-primary-dark/20
      flex relative gap-4 
      p-2 border-2 rounded-full"
    >
      <IpaIcon />
      <div
        className={`bg-primary-dark dark:bg-primary transition-all scale-95 
        shadow-md shadow-primary-dark/20
        -mt-2 ${currentType == Type.Home ? "left-0 group-hover:ml-1" : "right-0 group-hover:mr-1"} h-full aspect-square rounded-full absolute`}
      />
      <HomeIcon />
    </button>
  );
};
