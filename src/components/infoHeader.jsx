import React from 'react'
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import { Tooltip } from 'primereact/tooltip';

const InfoHeader = (props) => {
  return (
    <>
    <Tooltip target=".custom-tooltip-btn" position='bottom' className='border-round-lg'>
        <small className=''>
        Overview Of Orders Detail
        </small>
       
    </Tooltip>
        <div className='flex align-items-center'>
            <span className='fs-20 fw-500 secondary-text mr-2'>{props.text}</span>
            <span className='info-text custom-tooltip-btn '>
            <AiOutlineQuestionCircle fontSize={15}/>
            </span>
            
        </div>
    </>

  )
}

export default InfoHeader