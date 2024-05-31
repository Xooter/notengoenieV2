import { HomeIcon } from "./HomeIcon";
import { IpaIcon } from "./IpaIcon";
import { Type, useCharsContext } from "../../context/CharsContext";

export const TypeButton = () => {
  const { ChangeType, GetType } = useCharsContext();

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
      <HomeIcon />
      <div
        className={`bg-primary-dark dark:bg-primary transition-all scale-95 
        shadow-md shadow-primary-dark/20
        -mt-2 ${GetType() != Type.Home ? "left-0 group-hover:ml-1" : "right-0 group-hover:mr-1"} h-full aspect-square rounded-full absolute`}
      />
      <IpaIcon />
    </button>
  );
};
