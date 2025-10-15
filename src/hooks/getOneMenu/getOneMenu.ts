import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../../constants/Api";

export const useGetOneMenu = (id: string | undefined) => {
  return useQuery({
    queryKey: ["getOneMenu", id],
    queryFn: async () => {
      const { data } = await axios.get(`${API}/${id}`);
      return data;
    },
  });
};
