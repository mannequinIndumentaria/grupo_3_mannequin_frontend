import React, { Component } from 'react';
import CardIndividual from './CardIndividual'
import LastProduct from './LastProduct'
import Categories from './Categories'
import Tabla from './Tabla'
// import { render } from '@testing-library/react';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cantidadProductos: 0,
			cantidadUsuarios: 0,
			precioTotal: 0,
			mostrarCategories: [],
			lastProduct: [],
			listProduct: []
		}
	}

	apiCall(url, consecuencia) {
		console.log("APICVALL")
		fetch(url)
			.then(response => response.json())
			.then(data => consecuencia(data))
			.catch(error => console.log(error))
	}

	mostrarProducto = (data) => {
		if (typeof data != "undefined") {
			this.setState({
				cantidadProductos: data.count
			})

			this.setState({
				listProduct: data
			})
		}
	}

	mostrarUsuarios = (data) => {

		this.setState({
			cantidadUsuarios: data.count
		})
	}

	precioTotal = (data) => {
		var array = data.rows
		var total = array.reduce(function (a, b) {
			return parseFloat(b.price) + a;
		}, 0)

		this.setState({
			precioTotal: total
		})
	}

	mostrarCategories = (data) => {
		console.log("Categorías en Dashboard.js ", data);
		if (typeof data != "undefined") {
			this.setState({
				mostrarCategories: data
			})
		}

	}

	lastProduct = (data) => {
		console.log("Last Product ", data);
		this.setState({
			lastProduct: data
		})
	}

	listProduct = (data) => {
		// console.log("Last Product ", data);
		if (typeof data != "undefined") {
			this.setState({
				listProduct: data
			})
		}
	}

	componentDidMount() {

		this.apiCall("https://mannequin-indumentaria.herokuapp.com/api/products", this.mostrarProducto)
		this.apiCall("https://mannequin-indumentaria.herokuapp.com/api/users", this.mostrarUsuarios)
		this.apiCall("https://mannequin-indumentaria.herokuapp.com/api/products", this.precioTotal)
		this.apiCall("https://mannequin-indumentaria.herokuapp.com/api/categories/withProducts", this.mostrarCategories)
		this.apiCall("https://mannequin-indumentaria.herokuapp.com/api/products/lastProduct", this.lastProduct)

	}

	render() {
		return (
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4 pt-4">
					<h1 className="h3 mb-0 text-gray-800">Mannequin Dashboard</h1>
				</div>

				<div className="row">
					<div className="col-md-4 mb-4">
						<CardIndividual bordeColor="border-left-primary" titleColor="text-primary" title="Total de productos" dato={this.state.cantidadProductos} icon="fa-clipboard-list" />
					</div>
					<div className="col-md-4 mb-4">
						<CardIndividual bordeColor="border-left-success" titleColor="text-success" title="Total de categorías" dato={this.state.mostrarCategories.length} icon="fa-th-large" />
					</div>
					<div className="col-md-4 mb-4">
						<CardIndividual bordeColor="border-left-warning" titleColor="text-warning" title="Total de usuarios" dato={this.state.cantidadUsuarios} icon="fa-user-check" />
					</div>


				</div>

				<div className="row">
					<div className="col-lg-4 mb-4">
						<LastProduct lastProduct={this.state.lastProduct} />
					</div>
					<div className="col-lg-8 mb-4">
						<Categories mostrarCategories={this.state.mostrarCategories} />
					</div>
					<div className="col-lg-12 mb-4">
						<Tabla listProduct={this.state.listProduct} />
					</div>
				</div>
			</div>
		)
	}

}
export default Dashboard;