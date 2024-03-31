import React, {FC, ChangeEvent, FormEvent, useState} from "react";
import Sneakers from '../models/Sneakers';
import './style.css';

interface EditSneakersFormProps {
    data: Sneakers; // информация о каждом кроссовке
    updateSneakers: (newSneakers: Sneakers) => void;
    handleToggleEdit: () => void;
}

const EditSneakersForm: FC<EditSneakersFormProps> = ({ data, updateSneakers, handleToggleEdit}) => {
    const [editSneakers, setEditSneakers] = useState<Sneakers>(data);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
const {name, value} = e.target

    setEditSneakers({
        ...editSneakers, [name]: value
    });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, price, img} = editSneakers;

        if (title && price && img) {
            updateSneakers(editSneakers); // если все проверки будут пройдены то вызываем обновленные данные
            handleToggleEdit();
        }
    }

    return (
        <form className="edit-form" onSubmit={handleSubmit}> {/* // handleSubmit - вешаем обработчик события по нажатию на кнопку */}
        <input name="title" type="text" placeholder="Название" onChange={handleChange} value={editSneakers.title}/>{/* в value передаем соответствие свойства */}
        <input name="price" type="text" placeholder="Стоимость" onChange={handleChange} value={editSneakers.price}/>{/* в value передаем соответствие свойства */}
        <input name="img" type="text" placeholder="Изображение" onChange={handleChange} value={editSneakers.img}/>{/* в value передаем соответствие свойства */}
        <button type='submit'> Подтвердить </button>
        </form>
    )
}

export default EditSneakersForm;