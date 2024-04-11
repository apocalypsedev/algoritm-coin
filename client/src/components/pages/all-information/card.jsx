import React from 'react'
import { styles } from '../../../constants/styles'

const Card = ({ item }) => {
  return (
    <div className={`${styles.gridCard}  p-4`}>
        <div className={`${styles.flexX} justify-between`}>
          <h1 className="text-2xl font-semibold text-slate-500">{item.title}</h1>
          {<item.icon className='text-3xl text-slate-500'/>}
        </div>
        <div className={`${styles.flexX} justify-between mt-6`}>
          <h3 className='text-3xl text-slate-600 font-bold'>{item.count}</h3>
          <p>04/09/2024</p>
        </div>
      </div>
  )
}

export default Card