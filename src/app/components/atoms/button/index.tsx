import { FC, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const styleButton = tv({
  base: "w-full h-auto flex items-center justify-center font-bold rounded-[6px] px-8 py-3 tablet:w-[42%] laptop::w-[40%]",
  variants: {
    size: {
      base: "text-base",
      sm: "text-sm",
      xs: "text-xs",
      lg: "text-lg",
      xl: "text-xl",
    },
    fill: {
      true: "bg-primary text-background",
    },
    outlined: {
      true: "border-[2.5px] border-primary bg-transparent text-primary",
    },
    secondary: {
      true: "bg-secondary text-white",
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
