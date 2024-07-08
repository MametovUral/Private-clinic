export type Path = string;

export interface Handle {
  crumb?: (match: Match) => string;
}
export interface Match {
  pathname: string;
  handle?: Handle;
}
