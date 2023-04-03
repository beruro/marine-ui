import React, { FC } from "react";
import classNames from "classnames";

//size
export type ButtonSize = "lg" | "sm";
//type
export type ButtonType = "primary" | "default" | "danger" | "link";

//组件的接口
interface BaseButtonProps {
  className?: String;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

export const Button: FC<BaseButtonProps> = (props) => {
  const { className, disabled, size, children, btnType, href } = props;

  const classes = classNames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });

  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
