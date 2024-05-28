import React from 'react'
import { styles } from '../../../constants/styles'
import Card from './card';
import { mentors } from '../../../constants/data';
import Example from './bar.jsx';
import { Mentors } from './mentors';
import DiagramLine from './diagram-line';
import { Pupils } from './pupils.jsx';
import { CarouselCustomNavigation } from './carousel.jsx';


const AllInformation = () => {
  return (
    <div className='w-full grid grid-cols-4  gap-4'>
      { mentors.map(item => (
          <Card key={item.title} item={item}/>
      ))}

      <div className="h-[150px] col-span-2 rounded-md bg-white">
        <CarouselCustomNavigation/>
      </div>

      <div className={`${styles.gridY} flex flex-col gap-4`}>
        <DiagramLine/>
        <Mentors/>
      </div>
      <div className={`${styles.gridY} flex flex-col gap-4`}>
        <Example/>
        <Pupils/>
      </div>

    </div>
  )
}

export default AllInformation