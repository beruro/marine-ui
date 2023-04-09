import React, { createContext, useState } from "react";
import classNames from "classnames";

type MenuMode = "horezontal" | "vertical";
type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  children?: React.ReactNode;
  style?: React.CSSProperties; //buttom组件一般不好设置这个？
  onSelect?: SelectCallback;
}
interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
//创建context
export const MenuContext = createContext<IMenuContext>({ index: 0 });
const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("fish-menu", className, {
    "menu-vertical": mode === "vertical",
  });
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      //onSelect是联合类型，可能存在也可能不存在  用来写其他自定义的操作，和active自己没啥关系
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    //onSelect( ) => handleClick(index) => { handle}
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horezontal",
};

export default Menu;
