export interface TButton extends React.HTMLAttributes<HTMLButtonElement> {
  // Costum properites
  disabled?: boolean;
  padding?: number | number[];
  fontSize?: number;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  size?: string;
  width?: string;
  height?: string;
  border?: string;
  backgroundColor?: string;
  cursor?: string;
  borderRadius?: string;
  gap?: number | number[];
}
