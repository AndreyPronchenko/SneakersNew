import React, {FC, useEffect, useState} from 'react'; 
import {useParams} from 'react-router-dom'; // полчение параметров юрл компонента
import Sneakers from '../models/Sneakers';

const SneakersFeature: FC = () => {
// импортировать на SneakersPage
const [sneakers, setSneakers] = useState<Sneakers | null>(null);
const {id} = useParams();

useEffect(() => {
    const sneakersState = localStorage.getItem('sneakersState');
    // проверка значения
    if(sneakersState && id){
        const sneakersList = JSON.parse(sneakersState); // получаем список кроссовок
        const searchId = parseInt(id); // преобразовать ид число
         const currentSneakers = sneakersList.find((p: Sneakers) => p.id === searchId) // p - переменная позволяющая сделать выборку по кроссовкам
         setSneakers(currentSneakers); // добавление кроссовок в локальное состояние
    }
}, [])

return (
    <>
    <span className='heading'>Наши кроссовки</span>
    <div className='sneakers sneakers-page'>
        <img src={`/images/${sneakers?.img}`} alt={sneakers?.title} />
        <h2>{sneakers?.title}</h2>
        <span>{sneakers?.price}₽</span>
        <p>Лучшие в городе!</p>
    </div>
    </>
)
}

export default SneakersFeature;