import React from 'react'
import TablaHeader from './TablaHeader';
import TablaFooter from './TablaFooter';
import TablaItem from './TablaItem';
function Tabla(props){
    const arrayInfo = [
        {
            name: "Alexandra",
            description: "Capa",
            price: 125,
            categories: ["Category 01","Category 02","Category 03"],
            colors: [
                {
                    name:"Red",
                    color:"text-danger"
                },
                {
                    name:"Blue",
                    color:"text-primary"
                },
                {
                    name:"Black",
                    color:"text-dark"
                }
            ],
            stock: 1,
        },
        {
            name: "Clara",
            description: "Genia",
            price: 125,
            categories: ["Category 01","Category 02","Category 03"],
            colors: [
                {
                    name:"Red",
                    color:"text-danger"
                },
                {
                    name:"Blue",
                    color:"text-primary"
                },
                {
                    name:"Black",
                    color:"text-dark"
                }
            ],
            stock: 1,
        },
        {
            name: "Nico",
            description: "Capo",
            price: 125,
            categories: ["Category 01","Category 02","Category 03"],
            colors: [
                {
                    name:"Red",
                    color:"text-danger"
                },
                {
                    name:"Blue",
                    color:"text-primary"
                },
                {
                    name:"Black",
                    color:"text-dark"
                }
            ],
            stock: 1,
        },
        {
            name: "Emma",
            description: "Genio",
            price: 125,
            categories: ["Category 01","Category 02","Category 03"],
            colors: [
                {
                    name:"Red",
                    color:"text-danger"
                },
                {
                    name:"Blue",
                    color:"text-primary"
                },
                {
                    name:"Black",
                    color:"text-dark"
                }
            ],
            stock: 1,
        }
]
    return(
            <div>
				<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <TablaHeader />
                                <TablaFooter />
                                <tbody>
                                    {/* en lugar de data={item} se puede pasar asi {...item}*/}
                                    {arrayInfo.map((item,i)=> <TablaItem key={i} data={item} /> )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
			</div>
    )
}

export default Tabla;