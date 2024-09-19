// nav.type.ts
export type TNavLink = {
  name: string;
  path: string;
};

export type TNavProps = {
  navLinks?: TNavLink[];
};
