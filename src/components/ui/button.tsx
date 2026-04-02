interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className = "", children, ...props }) => {
  const base = "px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-colors";
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-text",
    ghost: "text-text-secondary hover:text-text",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
