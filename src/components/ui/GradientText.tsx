interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function GradientText({ children, className = '' }: GradientTextProps) {
    return (
      <span className={`bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${className}`}>
        {children}
      </span>
    );
  }