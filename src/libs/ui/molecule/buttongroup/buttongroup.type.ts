export type Tbutton = {
  label: string;
  variant?: string;
  onClick?: () => void;
};

export type TButtonGroup = {
  buttons: Tbutton | Tbutton[];
  flexDirection?: string;
  gap?: number | number[];
};
