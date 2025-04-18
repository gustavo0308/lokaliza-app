// Esse é o HomeIcon.tsx (dentro de src/components)
import React from 'react';
import HomeIconImage from '../assets/icons/Home.png'; // Certifique-se que a imagem está com H maiúsculo

interface HomeIconProps {
  size: number;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
}

const HomeIcon: React.FC<HomeIconProps> = ({
  size,
  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
}) => {
  return (
    <img
      src={HomeIconImage}
      alt="Home"
      width={size}
      height={size}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default HomeIcon;
