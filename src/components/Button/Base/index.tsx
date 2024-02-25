import clsx from "clsx";
import { FC } from "react";
import classes from "./base.module.css";

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export enum ButtonVariant {
  "custom" = "custom",
}

const ButtonVariantClasses = {
  [ButtonVariant.custom]: clsx(classes.custom),
};

export interface ButtonProps {
  variant?: ButtonVariant;
  type?: HtmlButtonProps["type"];
  className?: HtmlButtonProps["className"];
  children: HtmlButtonProps["children"];
  onClick?: HtmlButtonProps["onClick"];
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.custom,
  type = "button",
  className = "",
  ...buttonProps
}) => {
  const variantClasses = ButtonVariantClasses[variant];
  const classes = clsx(variantClasses, className);

  return <button className={classes} {...buttonProps} />;
};

export default Button;
