import { HttpClient } from "./HttpClient";

export interface ApiTrendResponse {
  author: string;
  name: string;
  avatar: string;
  url: string;
  description: string;
  stars: number;
}

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

export class TrendsService {
  public constructor(private httpClient: HttpClient) {}

  public fetchAll() {
    return this.httpClient
      .get<ApiTrendResponse[]>("https://github-trending-api.now.sh/")
      .then(trends => trends.map(this.mapApiTrendToTrend));
  }

  private mapApiTrendToTrend(trend: ApiTrendResponse): Trend {
    return {
      author: {
        avatar: trend.avatar,
        name: trend.author
      },
      repository: {
        description: trend.description,
        name: trend.name,
        stars: trend.stars,
        url: trend.url
      }
    };
  }
}
