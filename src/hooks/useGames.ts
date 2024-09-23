import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string
}

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
   .get<FetchResponse<Game>>('/games', {    
    params: {
    genres: gameQuey.genre?.id, 
    parent_platforms: gameQuey.platform?.id, 
    ordering: gameQuey.sortOrder,
    search: gameQuey.searchText
  }})
  .then(res => res.data)
})

export default useGames