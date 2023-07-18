import React , {useState} from 'react'
import Sidebar from './Sidebar/sidebar';
import Header from './Header/header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import AddProduct from '../pages/Product/addProduct';
import AddCategory from '../pages/Category/addCategory';
        

const Template = () => {
  const [childValue, setChildValue] = useState(true);

  const handleChildValue = () => {
    setChildValue(!childValue);
  };
  return (
 <>
    <aside className={`body-bg border-right-1 border-size sidebar  border-clr ${childValue?'lgSidebar':'smSidebar'}`} >
        <Sidebar isCollapse={childValue} />
    </aside>
    <div className={` mr-4 ${childValue ?'rightSide lgRightSide  w-100':'rightSide smRightSide w-100'}`}>
        <div>
          <Header onChildValue={handleChildValue}/>
        </div>
        <div className='grid'>
          <div className='col-12 px-0 mx-0'>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/addCategory' element={<AddCategory/>}/>
              <Route  path='/addProduct' element={<AddProduct/>} />
            </Routes>
          </div>
        </div>
    </div>
 </>
  )
}

export default Template