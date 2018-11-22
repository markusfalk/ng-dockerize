export interface DockerizeOptions {
  angularport: number;
  dockerport: number;
  packagename: string;
  push: boolean;
  registry: string;
  username: string;
  tag: string;
}
