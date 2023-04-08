import React from "react";
import classNames from "classnames";

type MenuMode = "horezontal" | "vertical";
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  children?: React.ReactNode;
  style?: React.CSSProperties; //buttom组件一般不好设置这个？
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex } = props;
  const classes = classNames("fish-menu", className, {
    "menu-vertical": mode === "vertical",
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horezontal",
};

export default Menu;
