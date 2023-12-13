import { FC, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const styleButton = tv({
  base: "w-full h-auto flex items-center justify-center font-bold rounded-[6px] px-8 py-3 tablet:w-[40%]",
  variants: {
    size: {
      base: "text-base",
      sm: "text-sm",
      xs: "text-xs",
      lg: "text-lg",
      xl: "text-xl",
    },
    fill: {
      true: "bg-black text-white",
    },
    outlined: {
      true: "border-[2.5px] border-black bg-transparent text-black",
    },
    secondary: {
      true: "bg-pink-400 text-white",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

interface ButtonProps extends VariantProps<typeof styleButton> {
  label: string;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={styleButton({ ...props })}>
      {props.label}
      {props?.icon}
    </button>
  );
};
