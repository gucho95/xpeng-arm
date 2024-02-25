import { AnimatedButton, AnimatedButtonVariant, Button } from "../Button";
import classes from "./header.module.css";

const ActionsMenu = () => {
  return (
    <div className={classes.actionsBlock}>
      <AnimatedButton
        variant={AnimatedButtonVariant.blackToGreen}
        className="text-[10px]"
      >
        Configureer mijn XPENG
      </AnimatedButton>
      <AnimatedButton
        variant={AnimatedButtonVariant.whiteToBlack}
        className="text-[10px]"
      >
        Aanmelden
      </AnimatedButton>
      <Button className="text-sm">Inloggen</Button>
      <button>=</button>
    </div>
  );
};

export default ActionsMenu;
