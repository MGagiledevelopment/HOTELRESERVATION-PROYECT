import React from "react"
import HeaderStyles from "../css/header.module.css"
import { showCountry } from "../utils"
import { showPrice } from "../utils"
import { showSize } from "../utils"
import { dateCardConversorFrom } from "../utils"
import { dateCardConversorTo } from "../utils"

export default function Header (props) {
   
  

    return (
        <div className={HeaderStyles.header}>
        <h1 className={HeaderStyles.title} >HOTELES </h1>
        <div className={HeaderStyles.filters}>
        <div>{dateCardConversorFrom(props.filter.startDate)} </div>
        <div>{dateCardConversorTo(props.filter.endDate)}</div>
        <div>{showCountry(props.filter.country)}</div>
        <div>{showPrice(props.filter.price)}</div>
        <div>{showSize(props.filter.size)}</div>
        </div>
        </div>
    )
}