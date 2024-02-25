import { FC } from "react";
import Button, { ButtonProps } from "../Base";
import clsx from "clsx";
import classes from "./animatedButton.module.css";

export enum AnimatedButtonVariant {
  "blackToWhite" = "blackToWhite",
  "whiteToBlack" = "whiteToBlack",
  "blackToGreen" = "blackToGreen",
  "custom" = "custom",
}

interface AnimatedButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: AnimatedButtonVariant;
}

const animatedButtonVariantClasses = {
  [AnimatedButtonVariant.whiteToBlack]: clsx(
    classes.whiteToBlack,
    classes.animatedButton
  ),
  [AnimatedButtonVariant.blackToWhite]: clsx(
    classes.blackToWhite,
    classes.animatedButton
  ),

  [AnimatedButtonVariant.blackToGreen]: clsx(
    classes.blackToGreen,
    classes.animatedButton
  ),
  [AnimatedButtonVariant.custom]: clsx(classes.custom),
};

const AnimatedButton: FC<AnimatedButtonProps> = ({
  variant = AnimatedButtonVariant.custom,
  className = "",
  ...animatedButtonProps
}) => {
  const variantClasses = animatedButtonVariantClasses[variant];
  const classes = clsx(className, variantClasses);

  return <Button className={classes} {...animatedButtonProps} />;
};

export default AnimatedButton;
