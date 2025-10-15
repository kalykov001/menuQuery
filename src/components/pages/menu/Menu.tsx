import { useOrders } from "../../../context/useOrders";
import { useGetMenu } from "../../../hooks/getMenu/GetMenu";
import scss from "./menu.module.scss";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDeleteMenu } from "../../../hooks/delete/deleteMenu";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const {data: getMenu } = useGetMenu()
  const {addToOrders} = useOrders()
  const {mutate: deleteMenu , } = useDeleteMenu()
  const navigate = useNavigate()
  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>MENU</h1>
          <div className={scss.menuBlock}>
            {
              getMenu?.map((item: any) => (

            <div key={item._id} className={scss.menuCard}>
              <img
              src={item.image}
                alt=""
              />
              <h3>{item.name}</h3>
              <div className={scss.prBtns}>
                <h3>{item.price}$</h3>
                <button className={scss.orders} onClick={() => addToOrders(item)}>to order</button>
                
              </div>
              <div className={scss.btns}>

                <button onClick={() => deleteMenu(item._id)}><MdDelete/></button>
                <button onClick={() =>navigate(`/edit/${item._id}`) }> <FaEdit/></button>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
