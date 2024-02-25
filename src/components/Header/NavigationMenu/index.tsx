import classes from "../header.module.css";
import NavigationMenuItem from "./NavigationMenuItem";
import { NavigationMenuItemType } from "@/types/elements";

const NAVIGATION_MENU_DATA: NavigationMenuItemType[] = [
  { label: "P7", className: "!px-4 font-black italic" },
  { label: "G9", className: "!px-4 font-black italic" },
  { label: "Ontdeck", subMenu: [{ label: "Over XPENG" }, { label: "Nieuws" }] },
  {
    label: "Support",
    subMenu: [
      { label: "Laden" },
      { label: "Service" },
      { label: "Contact" },
      { label: "Finance" },
      { label: "XPENG voor" },
      { label: "FAQ" },
    ],
  },
  { label: "Vind ons" },
];

const NavigationMenu = () => {
  return (
    <nav className={classes.navigationBlock}>
      <ul className={classes.navigationMenu}>
        {NAVIGATION_MENU_DATA.map((item) => (
          <NavigationMenuItem {...item} key={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
