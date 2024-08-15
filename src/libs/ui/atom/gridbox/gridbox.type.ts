interface TGridBox extends React.HTMLAttributes<HTMLDivElement> {
  display?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridGap?: number | number[];
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
