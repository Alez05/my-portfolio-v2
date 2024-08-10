interface TFlexBox extends React.HTMLAttributes<HTMLDivElement> {
  // Costum properites
  display?: string;
  alignItems?: string;
  alignContent?: string;
  justifyContent?: string;
  position?: string;
  padding?: number | number[];
  gap?: number | number[];
  fontSize?: number;
  width?: string;
  height?: string;
  flexDirection?: string;
  flexWrap?: string;
  borderRadius?: number | number[] | string;
  borderRadiusUnit?: 'px' | '%';
  border?: string;
}
