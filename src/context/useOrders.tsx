import { create } from "zustand";
import { persist } from "zustand/middleware";
interface OrdersState {
  orders: OrdersItem[];
  addToOrders: (item: OrdersItem) => void;
  deleteOrders: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
}
interface OrdersItem {
  _id: number;
  name: string;
  price: number;
  image: string;
  count: number;
}
export const useOrders = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      addToOrders: (item) => {
            set((state) => {
          const couted = state.orders.find((el) => el._id === item._id);
          if (couted) {
            return {
              orders: state.orders.map((el) =>
                el._id === item._id
                  ? {
                      ...el,
                      count: el.count + 1,
                    }
                  : el
              ),
            };
          } else {
            return {
              orders: [
                ...state.orders,
                { ...item, count: 1},
              ],
            };
          }
        });
      },
      deleteOrders: (id) => {
        set((state) => ({
          orders: [...state.orders.filter((item) => item._id !== id)],
        }));
      },
      increment: (id) => {
        set((state) => ({
          orders: state.orders.map((item) =>
            item._id === id
              ? {
                  ...item,
                  count: item.count + 1,
                }
              : item
          ),
        }));
      },
      decrement: (id) => {
        set((state) => ({
          orders: state.orders.map((item) => {
            if (item._id === id && item.count > 1) {
              return {
                ...item,
                count: item.count - 1,
              };
            }
            return item;
          }),
        }));
      },
    }),
    {
      name: "orders",
    }
  )
);
