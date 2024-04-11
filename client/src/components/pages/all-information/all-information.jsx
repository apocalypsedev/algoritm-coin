import React from 'react'
import { styles } from '../../../constants/styles'
import Card from './card';
import { mentors } from '../../../constants/data';


const AllInformation = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-8 h-full gap-4'>
      { mentors.map(item => (
          <Card key={item.title} item={item}/>
      ))}

      <div className=" row-span-2 col-span-2 rounded-md bg-white"></div>

      <div className={`${styles.gridY}`}></div>
      <div className={`${styles.gridY}`}></div>

    </div>
  )
}

export default AllInformation