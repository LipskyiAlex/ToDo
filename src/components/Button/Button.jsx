import { Btn } from "./Button.styled";



export const ButtonComponent = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Btn variant="contained" type={type} selected={selected} {...otherProps}>
      {children}
    </Btn>
  );
};
