import React from 'react'
function Category(props) {
    const clase = "card " + props.bgcolor + " " + props.txtcolor + " shadow";
    const texto = props.text;
    const total = props.totalProductos;
    return (
        <div className={clase}>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        {texto}
                    </div>
                    <div className="col-lg-4 mb-1">
                        Cantidad de Productos: {total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;