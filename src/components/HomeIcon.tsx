import React from 'react';

type HomeIconProps = {
  onClick?: () => void;
  size?: number;
};

const HomeIcon: React.FC<HomeIconProps> = ({ onClick, size = 44 }) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={(size * 42) / 44} // mantém a proporção original 44x42
      viewBox="0 0 44 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
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
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACA0lEQVR4nO2ay07DMBBFZ4Gm/DFL+k0sqv7doKIElULJs51rzzmSd1F0H47tSDYDAAAAAICFHIYBCbiZfZjZ2cxeaSAn/BgGJSSGH5SQH35QQn74QQn54Qcl5IcflJAfflDCdg5mdpoI+DTzGX7WHjDzz8MP2JJnYefwRyhhJ3zDbKaExPBHKGElvuM6TgmJ4Y9QgkBQzukoPyCnhPxgnBLyA3FKyA/Cq5egEIALaEhBybgLaXkKioZdUFM5oy6srYxBb0Bj98a8Ia3dGvIGNXdnxBvW3ocBa9hDs8J78NKc4J48NSO0R2/yAnv2KCusglc5QZU8z7kuGJ1eBTzM8P3Qa5BLLsr2SswYD/kSlt5S7pXIKGHNFfFeiWeXsPZ+fq/EM0t4mbnhUoBNbsyXLFdxnHgxBdhkFpcMN/H2z6dFAfaVwb2l+n1r+H+VcL2uUYB973m3JewW/nUJt5sKBdiPQ8dYwu7hj9xuJhRgv059qzfcNVCA5R67KcAooPSEkxNUza+coGp+5QRV8ysnqJpfOUHV/MoJquZXTlA1v3KCqvmVE1TNr5ygan7lBFXzKyeoml85QdX8ygmq5ldOUDW/coKq+ZUTVM2vnKBqfuUEVfMrJ6iaXzlB1fzeE1RtpJFtPEQGBRgFpM/C4AvIDyJYgvLDiIQBAAAAAAAAAABgU3wCr9SYyrl0AjIAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default HomeIcon;
