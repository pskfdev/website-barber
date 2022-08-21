import React from 'react'
import UseFetch from '../method/UseFetch';
import { StyledTable } from '../styles/styledElement';


function TableList() {

  const { data } = UseFetch('./Data.json');


  return (
    <>
      <StyledTable>
        <tbody>
          {data.map((item) => {                                /* นำค่าที่ filter แล้วมาทำการ Map */
            return (
              <tr key={item.id}>
                <td>
                  <h4>{item.title}</h4>
                  <div>
                    <p>{item.detail}</p>
                  </div>
                </td>
                <td>
                  <p>{item.price}</p>
                </td>
              </tr>
            )
          })}
        </tbody>
      </StyledTable>
    </>
  )
}

export default TableList
