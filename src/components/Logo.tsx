const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main triangle outline - white */}
      <path
        d="M50 15 L80 75 L20 75 Z"
        fill="white"
        stroke="white"
        strokeWidth="1"
      />
      
      {/* Inner A shape with geometric lines */}
      <path
        d="M50 25 L35 65 L42 65 L45 57 L55 57 L58 65 L65 65 Z"
        fill="hsl(var(--primary))"
      />
      
      {/* Horizontal bar of A */}
      <line
        x1="46"
        y1="50"
        x2="54"
        y2="50"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      
      {/* Pyramid internal structure lines */}
      <line
        x1="50"
        y1="15"
        x2="50"
        y2="75"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        opacity="0.6"
      />
      
      <line
        x1="35"
        y1="45"
        x2="65"
        y2="45"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
};

export default Logo;