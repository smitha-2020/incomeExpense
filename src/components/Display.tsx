import React from 'react'
import { formDataincome } from './Common'



const Display = ({dataArr}:{dataArr:formDataincome[]}) => {
  return (
    <ul className="main-display-data">
          {dataArr.map(({ incomeid,incomesource, income, incomedate }) => (
            <li key={incomeid}>
              {incomesource}:{income}:{incomedate}
            </li>
          ))}
        </ul>
  )
}

export default Display