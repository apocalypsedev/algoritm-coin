import {Brend, User} from '../../../assets';
import { IoPower } from "react-icons/io5";
import { data } from '../../../constants/data';
import { Link } from 'react-router-dom';

const Saidbar = ({menu}) => {
  return (
    <div className={menu 
      ? "w-[80px] row-span-8  bg-white rounded-xl duration-300" 
      : "w-[290px] row-span-8 p-4 bg-white rounded-xl duration-300"}>
    <div className="bg-white rounded-xl p-4 ">
      <div className="w-[60px] h-[60px]">
        <img src={Brend} alt="brend-logo" className="w-full h-full" />
      </div>

      <div className='h-[70%]'>
        { data.map((item) => (
          <Link to={item.link} key={item.title}>
            <div  className='flex items-center justify-start gap-4 mt-2 rounded-md   cursor-pointer hover:bg-neutral-100 shadow-sm p-2'>
              <div className='rounded-lg border border-slate-200 p-2'>
                {<item.icon/>}
              </div>
              {
                menu ? "" :  <p>{item.title}</p>
              }
             
            </div>
          </Link>
        ))}
      </div>
        
       { menu 
        ?  <div className='p-1 w-[90%] flex items-center justify-between shadow-lg rounded-md bg-slate-100'> 
          <div className='hover:bg-slate-300 cursor-pointer p-2 rounded-full'>
            <IoPower />
          </div>
        </div>
      : <div className='px-2 ml-[12px] py-2 w-[90%] flex items-center justify-between shadow-lg rounded-md bg-slate-100'> 
       <div className='w-10 h-10 rounded-full'>
         <img src={ User } alt="" className=' rounded-full h-full w-full object-cover'/>
       </div>
       <h1>Yoqubov Sh.</h1>
       <div className='hover:bg-slate-300 cursor-pointer p-2 rounded-full'>
         <IoPower />
       </div>
     </div>
       } 


    </div>
    
    </div>
  )
}

export default Saidbar