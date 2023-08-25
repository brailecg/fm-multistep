export const ToggleIcon = ({ planFreq }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={38} height={20} fill="none">
    <rect width={38} height={20} fill="#022959" rx={10} />
    <circle cx={planFreq ? 10 : 28} cy={10} r={6} fill="#fff" />
  </svg>
);
