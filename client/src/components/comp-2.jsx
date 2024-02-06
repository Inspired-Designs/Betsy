import React, { Fragment, useState } from "react";

const ComponentTwo = () => {

  let price = "$129.99"
  let description = "Introducing our versatile chain collection, available in gold, silver, and stainless steel finishes, with lengths ranging from 14mm to 18mm, ensuring there's a perfect match for every style and occasion. Crafted with precision and durability in mind, our chains offer timeless elegance and effortless customization to elevate your look with ease."
  let finish = ['Gold', 'Silver', 'Stainless Steel']
  let length = ['12mm', '16mm', '18mm']

  return (
    <div className="Info">
      <p style={{ color: 'darkred' }}>In 20+ carts</p>
      <h3 style={{ color: 'green' }}>{price}</h3>
      <h6 style={{ color: 'green' }}>20% off sale for the next 4 hours</h6>
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