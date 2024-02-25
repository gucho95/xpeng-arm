"use client";
import { FC, useState } from "react";
import classes from "../header.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { NavigationMenuItemType } from "@/types/elements";
import NavigationSubMenu from "./NavigationSubMenu";

interface NavigationMenuItemProps extends NavigationMenuItemType {}

const NavigationMenuItem: FC<NavigationMenuItemProps> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuOpen = () => {
    props?.subMenu && setMenuOpen(true);
  };

  const onMenuClose = () => {
    props?.subMenu && setMenuOpen(false);
  };

  return (
    <li
      className={clsx(classes.navigationMenuItem, props?.className)}
      onMouseEnter={onMenuOpen}
      onMouseLeave={onMenuClose}
    >
      <span className={classes.navigationMenuItemContent}>
        {props.label}
        {props?.subMenu ? (
          <ChevronDownIcon className="w-4 h-4 inline p-1" />
        ) : null}
      </span>

      {props.subMenu ? (
        <NavigationSubMenu menuOpen={menuOpen} subMenuItems={props.subMenu} />
      ) : null}
    </li>
  );
};

export default NavigationMenuItem;
