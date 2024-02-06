import React, { Fragment, useState } from "react";

const ComponentTwo = () => {

  let price = "$123"
  let description = "14k gold paperclip chain necklace, thick chain necklace | paper clip necklace, gold link necklace"
  let finish = ['gold', 'silver', 'stainless steel']
  let length = ['12mm', '16mm', '18mm']

  return (
    <div className="Info">
      <p style={{ color: 'red' }}>In 20+ carts</p>
      <h3 style={{ color: 'green' }}>{price}</h3>
      <p className="Description">{description}</p>
      <ul>
        <li>Arrives soon! Get it in less than 24 hours</li>
        <li>Returns & exchanges accepted</li>
      </ul>

{/* Finish dropdown */}
      <p className="DropDownLabel">Finish:</p>
      <select className="form-select" aria-label="Default select example">
        <option selected>Select finish...</option>
        <option value="1">{finish[0]}</option>
        <option value="2">{finish[1]}</option>
        <option value="3">{finish[2]}</option>
      </select>

{/* Length dropdown */}
      <p className="DropDownLabel">Length:</p>
      <select className="form-select" aria-label="Default select example">
        <option selected>Select length...</option>
        <option value="1">{length[0]}</option>
        <option value="2">{length[1]}</option>
        <option value="3">{length[2]}</option>
      </select>
{/* Cart Button */}
      <div className="AddCart">
        <h5>Add to cart</h5>
      </div>
    </div>
  )
}

export default ComponentTwo