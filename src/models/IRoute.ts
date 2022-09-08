export interface IRoute {
  path: string;
  component: () => JSX.Element | React.ReactNode | any;
}
