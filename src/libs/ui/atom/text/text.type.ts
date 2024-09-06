export type TText = {
  children?: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: number | string;
  lineHeight?: number;
  letterSpacing?: string;
  textAlign?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a';
  textDecoration?: string;
  // ellipsis?: boolean;
  href?: string;
  title?: string;
  width?: string;
  height?: string;
};
