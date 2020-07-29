import React, { Component } from 'react';
import CardIndividual from './CardIndividual'
import LastProduct from './LastProduct'
import Categories from './Categories'
import Tabla from './Tabla'
import { render } from '@testing-library/react';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cantidadProductos: 0,
			cantidadUsuarios: 0,
			precioTotal: 0
		}
	}

	apiCall(url, consecuencia) {
		fetch(url)
			.then(response => response.json())
			.then(data => consecuencia(data))
			.catch(error => console.log(error))
	}

	mostrarProducto = (data) => {
		console.log(data);
		this.setState ({
			cantidadProductos: data.count
		})
	}

	mostrarUsuarios = (data) => {
		console.log(data);
		this.setState ({
			cantidadUsuarios: data.count
		})
	}

	/*precioTotal = (data) => {
		console.log(data.rows)
		var total = data.rows.reduce( (a,b) => {
			b.precio + a
		})
		this.setState ({
			precioTotal: total
		})
	}*/

	componentDidMount() {
		this.apiCall("http://localhost:3000/api/products", this.mostrarProducto)
		this.apiCall("http://localhost:3000/api/users", this.mostrarUsuarios)
		/*this.apiCall("http://localhost:3000/api/products", this.precioTotal)*/
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				<div className="row">
					<div className="col-md-8 mb-4">
						<CardIndividual bordeColor="border-left-primary" titleColor="text-primary" title="Products in Data Base" dato={this.state.cantidadProductos} icon="fa-clipboard-list" />
					</div>
					<div className="col-md-2 mb-4">
						<CardIndividual bordeColor="border-left-success" titleColor="text-success" title="Amount in products" dato="$546.456" icon="fa-dollar-sign" />
					</div>
					<div className="col-md-2 mb-4">
						<CardIndividual bordeColor="border-left-warning" titleColor="text-warning" title="Users quantity" dato={this.state.cantidadUsuarios} icon="fa-user-check" />
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4 mb-4">
						<LastProduct />
					</div>
					<div className="col-lg-8 mb-4">
						<Categories />
					</div>
					<div className="col-lg-8 mb-4">
						<Tabla />
					</div>
				</div>
			</div>
		)
	}

}
export default Dashboard;