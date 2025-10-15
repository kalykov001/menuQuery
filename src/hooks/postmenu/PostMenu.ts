import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../../constants/Api";
interface IPesponse {
  name: string;
  price: number;
  image: string;
  _id?: number;
}
export const usePostMenu = () => {
  return useMutation({
    mutationKey: ["post-menu"],
    mutationFn: async (newData: IPesponse) => {
      const response = await axios.post<IPesponse>(API, newData);
      return response.data;
    },
  });
};
