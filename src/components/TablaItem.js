import React from 'react'

function TablaItem(props) {
    const data = props;
    return (
        <tr>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.price}</td>
             <td>
                <ul>
                    
                    {data.sizes.map((size,i)=>  <li key={i}>{size.name}</li> )}
                </ul>
            </td>
            
            {/*<td>{data.stock}</td> */}
        </tr>
    )
}


export default TablaItem; 