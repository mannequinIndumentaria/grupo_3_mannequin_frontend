import React from 'react'

function TablaItem(props){
    const data = props.data;
    return(
        <tr>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.price}</td>
            <td>
                <ul>
                    {/* TODO */}
                    {data.categories.map((category,i)=>  <li key={i}>{category}</li> )}
                </ul>
            </td>
            <td>
                <ul>
                    {/* TODO */}
                    {data.colors.map((c,j)=> <li key={j}><span className={c.color}>{c.name}</span></li>)}
                </ul>
            </td>
            <td>{data.stock}</td>
        </tr>
    )
}


export default TablaItem; 