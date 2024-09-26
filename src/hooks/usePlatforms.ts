import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "../assets/entities/Platform";

const apiClient = new APIClient<Platform>('platforms/lists/parents')

const usePlatforms = () => 
useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, //24
 initialData: platforms
})

export default usePlatforms;