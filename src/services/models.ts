export interface Trend {
  author: {
    name: string;
    avatar: string;
  };
  repository: {
    name: string;
    url: string;
    description: string;
    stars: number;
  };
}