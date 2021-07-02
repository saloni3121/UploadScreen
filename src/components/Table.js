import React from 'react'
import TableData from './TableData';

function Table() {
    const data=[1,2,3];
    return (
    <div className="table-responsive" >
      <table className="table" >
        <thead className="table-light">
          <tr>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Column A</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Column B</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Column C</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Column D</th>
            <th scope="col" style={{paddingBottom:'20px',background:"#CCCCCC"}}>Column E</th>
            
          </tr>
        </thead>
        <tbody style={{backgroundColor:'white'}}>
            {data.map(obj=><TableData key={obj} val={obj}/>)}
        </tbody>
      </table>
    </div>
    )
}

export default Table
