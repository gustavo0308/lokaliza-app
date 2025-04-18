// src/components/LojasIcon.tsx
import React from 'react';

type LojasIconProps = {
  onClick?: () => void;
  size?: number;
};

const LojasIcon: React.FC<LojasIconProps> = ({ onClick, size = 44 }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={(size * 42) / 44}
      viewBox="0 0 44 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Aqui você pode colocar o código do ícone de lojas */}
      <rect width="43.1756" height="42" fill="url(#pattern0_136_129)" />
      <defs>
        <pattern id="pattern0_136_129" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlinkHref="#image0_136_129"
            transform="matrix(0.010133 0 0 0.0104167 0.0136138 0)"
          />
        </pattern>
        <image
          id="image0_136_129"
          width="96"
          height="96"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,..." // Coloque a base64 do ícone de Lojas aqui
        />
      </defs>
    </svg>
  );
};

export default LojasIcon;
