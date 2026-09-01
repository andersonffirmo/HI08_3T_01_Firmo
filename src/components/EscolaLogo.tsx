import React from 'react';

interface EscolaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  variant?: 'full' | 'compact' | 'icon';
  showSubtitle?: boolean;
}

export const EscolaLogo: React.FC<EscolaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showSubtitle = false
}) => {
  // Dimensions mapping for the brush banner
  const dimensions = {
    sm: { width: 140, height: 75, textClass: 'text-xs' },
    md: { width: 190, height: 100, textClass: 'text-sm' },
    lg: { width: 260, height: 138, textClass: 'text-base' },
    xl: { width: 340, height: 180, textClass: 'text-lg' },
    hero: { width: 420, height: 220, textClass: 'text-xl' },
  };

  const { width, height } = dimensions[size];

  return (
    <div
      id="escola-logo-container"
      className={`inline-flex flex-col items-center select-none group transition-transform duration-300 hover:scale-[1.02] ${className}`}
      title="Escola Parque Ipiranga"
    >
      {/* High-Fidelity SVG of the Official Orange Brush Logo (#FD7600) with Deep Green Lettering (#016E01) */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 600 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-auto max-w-full drop-shadow-sm filter"
        role="img"
        aria-label="Logomarca Oficial Escola Parque Ipiranga"
      >
        <defs>
          <filter id="brush-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#FD7600" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Dynamic Organic Orange Paint Brush Splash Background Shape (#FD7600) */}
        <g filter="url(#brush-glow)">
          {/* Main textured brush splash body */}
          <path
            d="M 180 32 
               C 240 24, 340 45, 420 80 
               C 475 105, 525 125, 555 142 
               C 560 145, 545 152, 530 156 
               C 505 162, 490 160, 480 162 
               C 515 175, 542 190, 520 198 
               C 490 205, 445 200, 395 210 
               C 350 218, 305 235, 255 242 
               C 210 248, 140 260, 95 272 
               C 70 278, 45 285, 38 275 
               C 30 265, 45 250, 58 238 
               C 28 245, 10 238, 12 225 
               C 15 210, 38 198, 52 190 
               C 22 195, 6 182, 10 168 
               C 15 152, 38 142, 58 135 
               C 38 135, 30 120, 35 110 
               C 42 98, 68 95, 95 85 
               C 120 75, 145 42, 180 32 Z"
            fill="#FD7600"
          />

          {/* Additional energetic brush stroke splatter details */}
          {/* Top-left brush splatters */}
          <path
            d="M 70 82 C 60 75, 75 65, 90 68 C 85 75, 78 80, 70 82 Z"
            fill="#FD7600"
          />
          <path
            d="M 45 105 C 32 98, 48 88, 62 92 C 55 98, 50 102, 45 105 Z"
            fill="#FD7600"
          />
          {/* Bottom-left bristle marks */}
          <path
            d="M 25 210 C 12 205, 8 220, 20 230 C 28 224, 28 215, 25 210 Z"
            fill="#FD7600"
          />
          <path
            d="M 18 250 C 6 242, 14 265, 35 268 C 30 258, 22 254, 18 250 Z"
            fill="#FD7600"
          />
          {/* Bottom center dry-brush streak */}
          <path
            d="M 190 248 C 240 242, 310 230, 340 226 C 310 233, 230 247, 190 248 Z"
            fill="#FD7600"
            stroke="#FD7600"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Right brush tail flick */}
          <path
            d="M 440 108 C 480 122, 530 138, 550 145 C 520 145, 470 132, 440 108 Z"
            fill="#FD7600"
          />
        </g>

        {/* Custom Green Lettering (#016E01) Matching the Official Logo */}
        <g id="logo-letters" fill="#016E01">
          {/* Line 1: "Escola" */}
          <text
            x="305"
            y="138"
            textAnchor="middle"
            fill="#016E01"
            fontFamily="'Inter', 'Playfair Display', sans-serif"
            fontWeight="900"
            fontSize="78"
            letterSpacing="-1.5px"
            style={{
              fontStyle: 'normal',
              textShadow: '0 1px 2px rgba(1, 110, 1, 0.2)'
            }}
          >
            Escola
          </text>

          {/* Line 2: "Parque Ipiranga" */}
          <text
            x="305"
            y="218"
            textAnchor="middle"
            fill="#016E01"
            fontFamily="'Inter', 'Playfair Display', sans-serif"
            fontWeight="900"
            fontSize="68"
            letterSpacing="-1.5px"
            style={{
              fontStyle: 'normal',
              textShadow: '0 1px 2px rgba(1, 110, 1, 0.2)'
            }}
          >
            Parque Ipiranga
          </text>
        </g>
      </svg>

      {/* Optional Academic Subtitle Pill if requested */}
      {showSubtitle && (
        <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#016E01]/10 text-[#016E01] border border-[#016E01]/20 text-[11px] font-semibold">
          <span>Ensino Fundamental II • 8º Ano</span>
        </div>
      )}
    </div>
  );
};
