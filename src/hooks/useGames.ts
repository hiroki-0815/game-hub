import { GameQuery } from "../App";
import useData from "./useData";

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

const useGames = (gameQuey: GameQuery) => useData<Game>(
  '/games',
   {
    params: {
      genres: gameQuey.genre?.id, 
      platforms: gameQuey.platform?.id, 
      ordering: gameQuey.sortOrder,
      search: gameQuey.searchText
    }}, 
    [gameQuey]
    );

export default useGames