import { useQuery} from "@tanstack/react-query";
import axios from "axios";
import { API } from "../../constants/Api";

export const useGetMenu = () => {
  return useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await axios.get(API);
      return data.data;
    },
  });
};
