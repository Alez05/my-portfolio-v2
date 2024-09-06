interface TFlexBox extends React.HTMLAttributes<HTMLDivElement> {
  // Costum properites
  display?: string;
  alignItems?: string;
  alignContent?: string;
  justifyContent?: string;
  justifyItems?: string;
  position?: string;
  padding?: number | number[];
  gap?: number | number[];
  fontSize?: number | string;
  width?: string;
  height?: string;
  flexDirection?: string;
  flexWrap?: string;
  borderRadius?: number | number[] | string;
  borderRadiusUnit?: 'px' | '%';
  border?: string;
  color?: string;
  backgroundColor?: string;
  cursor?: string;
  inset?: number | number[] | string;
  float?: string;
}
