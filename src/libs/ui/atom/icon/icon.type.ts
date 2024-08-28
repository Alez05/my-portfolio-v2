export interface TIcon extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: TIconList;
  backgroundColor?: string;
  fontSize?: number;
  width?: string;
  height?: string;
  borderRadius?: string;
  round?: boolean;
}

export const iconList = {
  image: '\\e90d',
  phone: '\\e942',
  location: '\\e947',
  display: '\\e956',
  mobile2: '\\e959',
  tablet: '\\e95a',
  download: '\\e960',
  rocket: '\\e9a5',
  menu: '\\e9bd',
  link: '\\e9cb',
  whatsapp: '\\ea93',
  github: '\\eab0',
  linkedin: '\\eac9',
  html: '\\eae4',
  html2: '\\eae5',
  codewars: '\\e900',
  css3: '\\e901',
  csswizardry: '\\e902',
  discord: '\\e903',
  github1: '\\e904',
  javascript: '\\e905',
} as const;

export type TIconList = keyof typeof iconList;
