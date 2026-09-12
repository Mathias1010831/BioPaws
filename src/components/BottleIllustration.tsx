/**
 * Ilustración SVG del frasco BioPaws 500 ml,
 * fiel al tablero de marca: etiqueta miel, arco crema,
 * huella marrón y tipografía bicolor.
 */
export default function BottleIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 260 470"
      className={className}
      role="img"
      aria-label="Frasco de Shampoo Natural BioPaws de 500 ml"
    >
      <defs>
        <linearGradient id="bp-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#EFE5D2" />
          <stop offset="0.2" stopColor="#FFFDF6" />
          <stop offset="0.6" stopColor="#FFFEFB" />
          <stop offset="1" stopColor="#EBDFC8" />
        </linearGradient>
        <linearGradient id="bp-label" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F8D269" />
          <stop offset="1" stopColor="#EDB73C" />
        </linearGradient>
        <clipPath id="bp-label-clip">
          <rect x="72" y="178" width="116" height="180" rx="18" />
        </clipPath>
      </defs>

      {/* Hoja decorativa junto al dosificador */}
      <path
        d="M170 54 c 15 -12 29 -10 36 -3 c -9 11 -25 14 -36 3 z"
        fill="#78AC12"
        opacity="0.9"
      />
      <path
        d="M172 55 c 10 -2 22 -2 32 -3"
        stroke="#557F0A"
        strokeWidth="1.4"
        fill="none"
        opacity="0.7"
      />

      {/* Dosificador */}
      <rect x="58" y="20" width="52" height="17" rx="8.5" fill="#38190F" />
      <rect x="102" y="10" width="56" height="36" rx="13" fill="#522A1F" />
      <rect x="117" y="44" width="26" height="34" rx="7" fill="#38190F" />
      <rect x="104" y="74" width="52" height="20" rx="7" fill="#522A1F" />
      <g stroke="#38190F" strokeWidth="2" opacity="0.55">
        <line x1="117" y1="79" x2="117" y2="89" />
        <line x1="130" y1="79" x2="130" y2="89" />
        <line x1="143" y1="79" x2="143" y2="89" />
      </g>

      {/* Cuerpo del frasco */}
      <path
        d="M104 94 C 76 106, 60 130, 60 164 L60 408 C60 436, 82 452, 110 452 L150 452 C178 452, 200 436, 200 408 L200 164 C200 130, 184 106, 156 94 Z"
        fill="url(#bp-body)"
        stroke="#522A1F"
        strokeOpacity="0.16"
        strokeWidth="2"
      />
      <path
        d="M82 152 C76 212 76 330 84 398"
        stroke="#FFFFFF"
        strokeOpacity="0.7"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Burbujas sobre el hombro */}
      <circle cx="90" cy="122" r="5" fill="#fff" opacity="0.55" />
      <circle cx="104" cy="112" r="3" fill="#fff" opacity="0.45" />
      <circle cx="172" cy="126" r="4" fill="#fff" opacity="0.5" />

      {/* Etiqueta */}
      <rect
        x="72"
        y="178"
        width="116"
        height="180"
        rx="18"
        fill="url(#bp-label)"
        stroke="#522A1F"
        strokeOpacity="0.12"
      />
      {/* Arco crema con la huella */}
      <path
        d="M82 268 L82 262 C82 214 102 194 130 194 C158 194 178 214 178 262 L178 268 Z"
        fill="#FBF7EC"
      />
      <g fill="#522A1F">
        <ellipse
          cx="110"
          cy="224"
          rx="7.5"
          ry="10"
          transform="rotate(-18 110 224)"
        />
        <ellipse cx="130" cy="216" rx="8" ry="11" />
        <ellipse
          cx="150"
          cy="224"
          rx="7.5"
          ry="10"
          transform="rotate(18 150 224)"
        />
        <ellipse cx="130" cy="245" rx="15" ry="11.5" />
      </g>
      <path
        d="M131 243 c 4 -7 11 -8 15 -6 c -2 7 -9 10 -15 6 z"
        fill="#78AC12"
      />

      {/* Wordmark bicolor */}
      <text
        x="130"
        y="293"
        textAnchor="middle"
        fontSize="27"
        fontWeight="700"
        fontFamily="var(--font-fraunces), Georgia, serif"
      >
        <tspan fill="#557F0A">Bio</tspan>
        <tspan fill="#522A1F">Paws</tspan>
      </text>
      <g
        fill="#522A1F"
        opacity="0.72"
        fontSize="6.5"
        letterSpacing="1.6"
        textAnchor="middle"
      >
        <text x="130" y="307">CUIDADO NATURAL</text>
        <text x="130" y="316">PARA PATAS FELICES</text>
      </g>
      <g
        fill="#522A1F"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="0.4"
        textAnchor="middle"
      >
        <text x="130" y="332">SHAMPOO NATURAL</text>
        <text x="130" y="345">PARA PERROS</text>
      </g>

      {/* Banda inferior de la etiqueta */}
      <g clipPath="url(#bp-label-clip)">
        <rect x="72" y="338" width="116" height="20" fill="#522A1F" />
        <text
          x="130"
          y="351"
          textAnchor="middle"
          fontSize="6.2"
          letterSpacing="1.2"
          fill="#F9F8F3"
        >
          PIEL SANA · PELAJE FELIZ
        </text>
      </g>

      {/* Contenido neto */}
      <text
        x="130"
        y="428"
        textAnchor="middle"
        fontSize="12"
        fill="#522A1F"
        opacity="0.6"
      >
        500 ml ℮
      </text>
    </svg>
  );
}
