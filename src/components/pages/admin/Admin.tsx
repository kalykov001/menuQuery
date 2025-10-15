import { useForm } from "react-hook-form";
import scss from "./admin.module.scss";
import { usePostMenu } from "../../../hooks/postmenu/PostMenu";
interface iData {
  image: string;
  name: string;
  price: number;
}
const Admin = () => {
  const { handleSubmit, register, reset } = useForm<iData>();
  const { mutate: postMenu } = usePostMenu();
  const dataSubmited = (data: iData) => {
    postMenu(data);
    reset();
  };
  return (
    <section className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>ADMIN</h1>
          <form onSubmit={handleSubmit(dataSubmited)} className={scss.inpMenu}>
            <input
              {...register("image", {
                required: "Obezatelno",
              })}
              type="text"
              placeholder="Image"
            />
            <input
              {...register("name", {
                required: "Obezatelno",
              })}
              type="text"
              placeholder="Name"
            />
            <input {...register("price")} type="number" placeholder="Price" />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Admin;
