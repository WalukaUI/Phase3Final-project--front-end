import './EditPlayer.css'

function EditPlayer({isOpen}){
  
    function updatePlayer(e){
        e.preventDefault()
        console.log("clicked onupdate");
    }
    return (isOpen) ? (

        <div className="popup-box" >
            <div className="popup-inner">
                <div className="formDiv div1">
                    <form onSubmit={updatePlayer}>
                        <h4>Update Product hrtutujtyutututututututututututu</h4>
                        {/* <div className="form-group row">
                            <label >Product Name<input name="product_name" className="form-control form-control-sm" value={editProduct.product_name} placeholder="Name" onChange={handleChangeData} /></label>
                            <label >Price<input name="product_price" type="number" className="form-control form-control-sm" value={editProduct.product_price} placeholder="Price" onChange={handleChangeData} /></label>
                            <label >Description<input name="products_coo" className="form-control form-control-sm" value={editProduct.products_coo} placeholder="Description" onChange={handleChangeData} /></label>
                            <label >Category
                              <select className="form-select" name="product_master_category" value={editProduct.product_master_category} aria-label="Default select example" onChange={handleChangeData} >
                                    <option value="331">Electronic</option>
                                    <option value="333">Toys</option>
                                    <option value="334">Computer Parts</option>
                                    <option value="332">Other</option>
                                </select>
                            </label>
                            <label>ImageURL<input name="product_image" className="form-control form-control-sm" value={editProduct.product_image} placeholder="ImageURL" onChange={handleChangeData} /></label>
                            <label>Quantity<input name="product_stock" type="number" className="form-control form-control-sm" value={editProduct.product_stock} onChange={handleChangeData} placeholder="Quantity" /></label>
                            */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <button className=" btn btn-success"  type="submit">Update Product</button>
                                    </div>
                                    <div className="col-sm">
                                        {/* <button className="btn btn-danger" onClick={(e) => togglePopup(e)}>Cancel</button> */}
                                    </div>
                                    <div className="col-sm">
                                    </div>
                                </div>
                            </div>
                        {/* </div>  */}


                    </form>
                </div>
            </div>
        </div>
    ) : "";
}

export default EditPlayer