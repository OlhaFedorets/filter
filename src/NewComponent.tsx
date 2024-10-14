import React from "react";
import {FilterType} from "./App";


export type NewComponentType = {
    currentMoney: Money[]
    onClickFilterHandler: (filterType: FilterType) => void
}
type Money = {
    banknote: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    )
}