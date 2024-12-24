import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  variant?: 'default' | 'icon';
  className?: string;
}

export function Button({ 
  onClick, 
  children, 
  variant = 'default',
  className = ''
}: ButtonProps) {
  const baseStyles = "transition-all duration-200 border border-white/10";
  const variants = {
    default: "flex items-center space-x-2 px-4 py-2 bg-gray-800/50 text-white rounded-lg hover:bg-gray-700/50",
    icon: "p-2 rounded-xl hover:bg-white/10"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}