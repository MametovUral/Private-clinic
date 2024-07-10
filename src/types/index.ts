export type Path = string;

export interface Handle {
  crumb?: (match: Match) => string;
}
export interface Match {
  pathname: string;
  params: Record<string, string>;
  handle?: Handle 
}
