// шаг 5 - отображение карточек кроссовок

import React, {FC} from "react";
import SingleSneakers from "./SingleSneakers";
import Sneakers from "../models/Sneakers";

interface DisplaySneakersProps { // описание пропсов (свойство)
    sneakersList: Sneakers[]; // массив из кроссовок
    updateSneakers: (newSneakers: Sneakers) => void; // изменение карточки кроссовок
    deleteSneakers: (id: number) => void;
}

const DisplaySneakers: FC<DisplaySneakersProps> =
({sneakersList, updateSneakers, deleteSneakers}) => {
    return (
        // разметка
        <div className="container">
            {sneakersList.map((sneakers) => { // pizzasList - обращаемся к каждому кроссовку и проходимся по ним с помощью map
// sneakers - получаем каждый конкретный кроссовок
                return <SingleSneakers key= {sneakers.id} deleteSneakers = {deleteSneakers} updateSneakers = {updateSneakers} sneakers = {sneakers} />
            })}
        </div>
    )
}

export default DisplaySneakers;