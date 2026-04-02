import type { LucideIcon } from "lucide-react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  className = "",
  ...props
}) => {
  return (
    <button
      aria-label={label}
      className={`text-text-secondary hover:text-text transition-colors cursor-pointer p-1 rounded-md hover:bg-surface-raised ${className}`}
      {...props}
    >
      <Icon size={20} />
    </button>
  );
};

export default IconButton;
