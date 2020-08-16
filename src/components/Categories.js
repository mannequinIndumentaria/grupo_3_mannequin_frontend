import React from 'react'
import Category from './Category'

function Categories(props) {
    //console.log("Props! ", props)
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categorías en Base de Datos</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    {props.mostrarCategories.map((element, i) => (<div className="col-lg-12 mb-4">
                        <Category key={i +"category"} bgcolor="bg-info" txtcolor="text-white" text={element.name} totalProductos={element.total_productos} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories;