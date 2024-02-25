import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classes from "../header.module.css";

type NavigationSubMenuProps = {
  menuOpen: boolean;
  subMenuItems: { label: string }[];
};

const NavigationSubMenu: FC<NavigationSubMenuProps> = ({
  menuOpen,
  subMenuItems,
}) => {
  return (
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          transition={{ type: "spring", ease: "anticipate", duration: 0.5 }}
          initial={{ height: 0, opacity: 0.5 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ opacity: 0, height: 0 }}
          className={classes.navigationSubMenuWrapper}
        >
          <motion.ul className={classes.navigationSubMenu}>
            {subMenuItems?.map((subMenuItem, index) => (
              <motion.li
                key={subMenuItem.label}
                transition={{
                  ease: "backIn",
                  duration: 0.2,
                  delay: (index + 1) * 0.1,
                }}
                initial={{ opacity: 0, translateX: 40 }}
                animate={{ opacity: 1, translateX: 0 }}
                className={classes.navigationSubMenuItem}
              >
                {subMenuItem.label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default NavigationSubMenu;
