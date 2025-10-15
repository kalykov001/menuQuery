import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { API } from "../../constants/Api"

export const useDeleteMenu = () => {
    const QueryClient = useQueryClient()
    return useMutation({
        mutationKey: ["delete"],
        mutationFn: async (id) => {
 await axios.delete(`${API}/${id}`)
        },
        onSuccess: ()=> {
        QueryClient.invalidateQueries({
            queryKey: ["menu"]
        })
        }
    })
}