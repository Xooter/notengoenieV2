import { ThemeButton } from "../ui/ThemeButton/ThemeButton";

export const Header = () => {
  return (
    <div className="flex gap-20 justify-between mx-5">
      <div className="flex gap-2">
        <h1 className="font-kanit">NOTENGOENIE</h1>
        <a>HOME</a>
      </div>
      <ThemeButton />
    </div>
  );
};
