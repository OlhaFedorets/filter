import React, {useState} from 'react';
import './App.css';
import {NewComponent} from './NewComponent';


export type FilterType = 'all' | 'Dollars' | 'RUBLS'

function App() {
    const [money, setMoney] = useState([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;


    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'Dollars')
    }

    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'RUBLS')
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }


    return (
        <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler} />

        // <>
        //     <ul>
        //         {currentMoney.map((objFromMoneyArr, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span>{objFromMoneyArr.banknote}</span>
        //                     <span>{objFromMoneyArr.value}</span>
        //                     <span>{objFromMoneyArr.number}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft: '35px'}}>
        //         <button onClick={() => onClickFilterHandler('all')}>all</button>
        //         <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
        //         <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
        //     </div>
        // </>
    );
}

export default App;
