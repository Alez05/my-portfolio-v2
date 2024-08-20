export type TText = {
  children?: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  textAlign?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a';
  textDecoration?: boolean;
  underline?: boolean;
  elipsis?: boolean;
  href?: string;
  title?: string;
};
