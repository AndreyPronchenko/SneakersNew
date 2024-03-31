import React, {FC, useEffect, useState} from 'react'; // {FC} - подключаем компоненты формы
import AddSneakersForm from '../components/AddSneakersForm';
import DisplaySneakers from '../components/DisplaySneakers';
import Sneakers from '../models/Sneakers';
// import './App.css';



const HomeFeatures: FC = () => {
    const [sneakersList, setSneakersList] = useState<Sneakers[]>([]); // передаем состояние sneakersList - переменная setSneakersList - функция
  
    const addSneakers = (newSneakers: Sneakers) => { //добавление пиццы с типом Sneakers(создали в папке modules)
  
      const newSneakersList = [...sneakersList, newSneakers] //обновленное состояние с кроссовками промежуточная переменная
  
      setSneakersList(newSneakersList); // каждый при создании кроссовок будем копировать массив с кроссовками и добавлять новые кроссовки а затем отправляем
      localStorage.setItem('sneakersState', JSON.stringify(newSneakersList)); //передаем в хранилище данные о кроссовках в СТРОЧНОМ формате
    }
  
    const updateSneakers = (newSneakers: Sneakers) => { // сохранение кроссовок
      const newSneakersList = sneakersList.map((sneakers) => // обращаемся ко всем кроссовкам и проходимся по каждой в отдельности
      (sneakers.id === newSneakers.id ? newSneakers : sneakers))
  
      setSneakersList(newSneakersList);
      localStorage.setItem('sneakersState', JSON.stringify(newSneakersList));
    }
  
  const deleteSneakers = (id: number) => { // удаление кроссовок
    const newSneakersList = sneakersList.filter(sneakers => sneakers.id !== id); // по ид
    setSneakersList(newSneakersList);
    localStorage.setItem('sneakersState', JSON.stringify(newSneakersList));
  }
  
  useEffect(() => {
    const sneakersState = localStorage.getItem('sneakersState');
    if(sneakersState) {
      setSneakersList(JSON.parse(sneakersState)); // преобразуем JSON в строку
    }
  }, [])
  
  return(
    <div className='App'>
      <div className='wrap'>
    <span className='heading'>Магазин кроссовок</span>
    <AddSneakersForm addSneakers={addSneakers} /> {/* передача данных через пропсы */}
    <DisplaySneakers 
    sneakersList = {sneakersList} // передаем список кроссовок
    deleteSneakers = {deleteSneakers}
    updateSneakers = {updateSneakers} // изменение кроссовок
    />
      </div>
    </div>
  );
  }

export default HomeFeatures;