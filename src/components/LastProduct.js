import React from 'react';
import foto from '../assets/images/product_dummy.svg';
function LastProduct(props){
    var producto = props.lastProduct[0]
    var rutaFoto = foto
    var nombre = ""
    var rutaProducto = ""
    if (typeof producto != "undefined"){
        //console.log(producto.idproducts);
        if(typeof producto.images[0] != "undefined"){
            rutaFoto = 'https://mannequin-indumentaria.herokuapp.com/images/articulos/' + producto.images[0].file_name;
        }else{
            rutaFoto = 'https://mannequin-indumentaria.herokuapp.com/images/otras/not_found.jpg';
        }
        nombre = producto.name;
        rutaProducto = 'https://mannequin-indumentaria.herokuapp.com/detalleProducto/' + producto.idproducts
    }
    
    return(
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Último Producto</h6>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={rutaFoto} alt="dummy"/>
                </div>
                <p>{nombre}</p>
                <a target="_blank" rel="noopener noreferrer" href={rutaProducto}>Ver detalle de producto</a>
            </div>
        </div>
    )
}

export default LastProduct;