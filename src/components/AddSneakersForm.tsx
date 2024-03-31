// шаг 3
import React, {FC, ChangeEvent, FormEvent, useState} from "react";
import Sneakers from '../models/Sneakers';
import './style.css';

interface AddSneakersFormProps { //интерфейс
    addSneakers: (newSneakers: Sneakers) => void; // метод передачи кроссовок и его тип метод ничего не возвращает поэтому в типе данных нужно прописывать void
}

const initState = {
    title: '', price: '', img: '', // базовые значения для объекта initState - используется для дефолтного значения useState
};

const AddSneakersForm: FC<AddSneakersFormProps> = ({addSneakers}) => { // получаем компонент addSneakers
 
    const [newSneakers, setNewSneakers] = //то что передаем
    useState <{title: string, price: string, img: string}>(initState); // указать типы данных со стороны TS

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target; //свойство name передает название каждого поля, value - значение которое вводится в поле

    setNewSneakers ({
        ...newSneakers, //текущее значение
        [name]: value // обновление полей
    });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // блокировка стандартного поведения по нажатию на кнопку чтобы страница не перезагружалась

        const {title, price, img} = newSneakers; // получаем данные из newSneakers

        if (title && price && img) { // проверка на заполнение полей если все поля заполнены то можно использовать метод addSneakers
            addSneakers({
                title, img, price: Number(price), id: Date.now() //Number(price) - пр-ть цену в числовой тип данных, Date.now() - текущая временная рамка
            });
            setNewSneakers(initState); // очищаем поля формы через передачу дефолтного значения
        }
    };

    return (
        <form onSubmit={handleSubmit}> {/* // handleSubmit - вешаем обработчик события по нажатию на кнопку */}
        <input name="title" type="text" placeholder="Название" onChange={handleChange} value={newSneakers.title}/>{/* в value передаем соответствие свойства */}
        <input name="price" type="text" placeholder="Стоимость" onChange={handleChange} value={newSneakers.price}/>{/* в value передаем соответствие свойства */}
        <input name="img" type="text" placeholder="Изображение" onChange={handleChange} value={newSneakers.img}/>{/* в value передаем соответствие свойства */}
        <button type='submit'> + Добавить в заказ </button>
        </form>
    )
}

export default AddSneakersForm;