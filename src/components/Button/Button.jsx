import { Btn } from "./Button.styled";


export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Btn type={type} selected={selected} {...otherProps}>
      {children}
    </Btn>
  );
};
