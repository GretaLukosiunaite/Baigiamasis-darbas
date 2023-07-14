interface IButtonProps {
  text: string;
  action?: () => void;
  className: string;
}

const Button = ({ text, action, className }: IButtonProps) => {
  return (
    <button
      className={className ? `button ${className}` : `button`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
