import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import genres from "../data/genres";

const apiClient = new APIClient<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms:{platform: Platform} [];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuey: GameQuery) => 
useQuery<FetchResponse<Game>,Error>({
  queryKey: ['games', gameQuey],
  queryFn: () => 
  apiClient
  .getAll({
    params: {
      genres: gameQuey.genre?.id,
      parent_platforms: gameQuey.platform?.id,
      ordering: gameQuey.sortOrder,
      search: gameQuey.searchText,
    }
  })
  });


export default useGames