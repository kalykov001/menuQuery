import { useOrders } from "../../../context/useOrders";
import scss from "./orders.module.scss";

const Orders = () => {
  const { orders , deleteOrders , increment , decrement} = useOrders()
  const totalPrice = orders.reduce((acc , item) => acc + +item.price * item.count, 0)
  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>ORDERS</h1>
          <div className={scss.ordersBlock}>
            {
              orders.map((item) => (
  <div className={scss.ordersCard}>
              <img src={item.image} alt="" />
              <div className={scss.namePrice}>
                <h2>{item.name}</h2>
                <h3>{item.price * item.count}$</h3>
              </div>
              <div className={scss.btns}>
                <button onClick={()=> deleteOrders(item._id)} className={scss.deleted}>delete</button>
                <div className={scss.counted}>
                  <button onClick={() => decrement(item._id)}>-</button>
                  <h4>{item.count}x</h4>
                  <button  onClick={() => increment(item._id)}>+</button>
                </div>
              </div>
            </div>
              ))
            }
         {
          orders.length ? <h1>TotalPrice: {totalPrice }$</h1> :
          <h1 style={{letterSpacing: "2px" , color: 'red'}}>THERE ARE NO ORDERS AT THE MOMENT</h1>
         }
          </div>

        </div>
      </div>
    </section>
  );
};

export default Orders;
