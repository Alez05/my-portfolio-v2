export interface TButton extends React.HTMLAttributes<HTMLButtonElement> {
  // Costum properites
  disabled?: boolean;
  padding?: number | number[];
  fontSize?: number;
  type?: string;
  color?: string;
  size?: string;
  width?: string;
  height?: string;
  border?: string;
  bgColor?: string;
  cursor?: string;
  borderRadius?: string;
  gap?: number | number[];
}
