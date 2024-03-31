// шаг 6 - принимает данные по каждом кроссовке и отображает ее
import React, {FC, useState} from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"; // подключаем пакет из которого будут браться иконки
import EditSneakersForm from './EditSneakersForm';
import Sneakers from '../models/Sneakers';

// Добавим для карточки
import { Link } from 'react-router-dom'; // в реакте используется вместо тега а


interface SingleSneakersProps {
    sneakers: Sneakers; // информация о каждом кроссовке
    updateSneakers: (newSneakers: Sneakers) => void;
    deleteSneakers: (id: number) => void;
}

const SingleSneakers: FC<SingleSneakersProps> = ({sneakers, updateSneakers, deleteSneakers}) => {
    // Редактирование кроссовок пользователь жмет на иконку и состояние будет меняться с тру на фолс
    
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit); // меняем значение на противоположное
    }

    const handleDelete = () => {
        deleteSneakers(sneakers.id);
    }

return (
    <div className="sneakers">
        <img src={`/images/${sneakers.img}`} alt={sneakers.title} />
        <h2>
        <Link to={`/sneakers/${sneakers.id}`}>
        {sneakers.title}
        </Link>
        </h2>
        <span>{sneakers.price} ₽</span>

        <div className="sneakers-controls"> {/* 2 иконки для редактирования и удаления карточек */}
        {/* Иконки npm i react-icons (с сайта npm пакета) иконка edit - карандаш */}
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={handleDelete} />
        </div>

        {edit //редактирование карточки
        ? <EditSneakersForm  // если тру то отражаем форму поверх карточки
        data = {sneakers}
        updateSneakers={updateSneakers} //изменение карточки
        handleToggleEdit={handleToggleEdit} // при сабмите закрываем карточку
        />
        :null}
    </div>
);
}


export default SingleSneakers;