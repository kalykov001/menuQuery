import { useEffect, useState } from "react";
import scss from "./edit.module.scss"
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneMenu } from "../../../hooks/getOneMenu/getOneMenu";
import { useEditMenu } from "../../../hooks/edited/editedMenu";
const Edit = () => {
     const [editName, setEditName] = useState<string>("");
  const [editImage, setEditImage] = useState<string>("");
  const [editPrice, setEditPrice] = useState<string>("");
  const { id } = useParams();
  const {data: getOneMenu , isSuccess} = useGetOneMenu(id)
  const {mutate: editMenu} = useEditMenu()
  const navigate = useNavigate()
    useEffect(() => {
    if (getOneMenu) {
      setEditName(getOneMenu.name || "");
      setEditImage(getOneMenu.image || "");
      setEditPrice(getOneMenu.price || "");
    }
  }, [isSuccess]);
const handleSave = () => {
    if(!id) return
    editMenu({
        id, 
        editedMenu: {
            image: editImage,
             name: editName,
        price: editPrice,
        }

    }) 
navigate("/")
}
    return (
        <div className={scss.container}>
            <div className="container">
                <div className={scss.mainContainer}>
<div className={scss.inpAdd}>
            <input
              key={editName}
              onChange={(e) => setEditName(e.target.value)}
              type="text"
              defaultValue={editName}
              placeholder="name"
            />
            <input
              defaultValue={editImage}
              onChange={(e) => setEditImage(e.target.value)}
              type="text"
              placeholder="image"
            />
            <input
              defaultValue={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              type="text"
              placeholder="price"
            />
            <button onClick={handleSave}>Save</button>
          </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;