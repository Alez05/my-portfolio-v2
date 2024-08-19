interface TGridBox extends React.HTMLAttributes<HTMLDivElement> {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: number;
  justifyItems?: string;
  alignItems?: string;
  justifyContent?: string;
  alignContent?: string;
  gridAutoFlow?: string;
  gridAutoColumns?: string;
  gridAutoRows?: string;
  placeItems?: string;
  placeContent?: string;
}
