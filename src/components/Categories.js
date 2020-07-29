import React from 'react'
import Category from './Category'

function Categories(){
    return(
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <Category bgcolor="bg-info" txtcolor="text-white" text="Category 01" />
                    </div>
                    <div className="col-lg-6 mb-4">
                         <Category bgcolor="bg-info" txtcolor="text-white" text="Category 02" />
                    </div>
                    <div className="col-lg-6 mb-4">
                          <Category bgcolor="bg-info" txtcolor="text-white" text="Category 03" />
                    </div>
                    <div className="col-lg-6 mb-4">
                         <Category bgcolor="bg-info" txtcolor="text-white" text="Category 04" />
                    </div>
                    <div className="col-lg-6 mb-4">
                        <Category bgcolor="bg-info" txtcolor="text-white" text="Category 05" />
                    </div>
                    <div className="col-lg-12 mb-4">
                        <Category bgcolor="bg-info" txtcolor="text-white" text="Category 06" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;