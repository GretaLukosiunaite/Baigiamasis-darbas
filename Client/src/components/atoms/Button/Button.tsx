
interface IButtonProps {
  text: string;
  action?: () => void;
  className: string
  // fullwidth?: boolean | undefined;
  // outline?: boolean | undefined;
  // color?: COLOR;
}

const Button = ({ text, action, className }: IButtonProps) => {
  return (
    <button
    className = {className ? `button ${className}`: `button`}
      onClick={action}
      // fullwidth={fullwidth ? 1 : 0}
      // outline={outline ? 1 : 0}
      // color={color}
    >
      {text}
    </button>
  );
};

export default Button;
