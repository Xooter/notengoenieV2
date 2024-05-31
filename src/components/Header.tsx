import { ThemeButton } from "../ui/ThemeButton/ThemeButton";

export const Header = () => {
  return (
    <div className="flex gap-20 justify-between items-center mx-5">
      <div className="flex flex-col">
        <svg
          className="fill-primary-dark dark:fill-primary ml-auto -mb-2 h-4 mr-[1px] aspect-square"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 520 520"
        >
          <path d="M.23,343.32C-3.97,244.63,50.52,178.3,142.73,178.3c46.1,0,79.63,14.56,123.64,32.36,33.53,14.56,67.06,29.12,100.59,29.12,31.43,0,50.29-11.33,56.58-63.1h96.4c2.1,101.93-44.01,156.94-140.4,156.94-44.01,0-81.73-12.94-127.83-30.74-39.82-16.18-69.16-30.74-98.49-30.74-33.53,0-50.3,27.51-54.49,71.19H.23Z" />
        </svg>
        <h1 className="text-2xl font-bold">
          NoTengo
          <strong className="text-primary-dark dark:text-primary font-bold">
            N
          </strong>
        </h1>
      </div>

      <ThemeButton />
    </div>
  );
};
