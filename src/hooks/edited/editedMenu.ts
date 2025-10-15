import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../../constants/Api";

export const useEditMenu = () => {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edited"],
    mutationFn: async ({
  id,
  editedMenu,
}: {
  id: string;
  editedMenu: any;
}   ) => {
      await axios.patch(`${API}/${id}`, editedMenu);
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["menu"],
      });
    },
  });
};
