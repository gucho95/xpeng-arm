import Image from "next/image";
import classes from "./header.module.css";
import ActionsMenu from "./ActionsMenu";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <header className={classes.header}>
      <Image src="./logo.svg" alt="xpeng logo" width={147} height={18} />
      <NavigationMenu />
      <ActionsMenu />
    </header>
  );
};

export default Header;
