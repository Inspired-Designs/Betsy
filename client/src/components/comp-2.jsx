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
      <div className="dropdown">
        <p className="DropDownLabel">Finish:</p>
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select a finish
        </a>

        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">{finish[0]}</a></li>
          <li><a className="dropdown-item" href="#">{finish[1]}</a></li>
          <li><a className="dropdown-item" href="#">{finish[2]}</a></li>
        </ul>
      </div>
{/* Length dropdown */}
      <div className="dropdown">
        <p className="DropDownLabel">Length:</p>
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select a length
        </a>

        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">{length[0]}</a></li>
          <li><a className="dropdown-item" href="#">{length[1]}</a></li>
          <li><a className="dropdown-item" href="#">{length[2]}</a></li>
        </ul>
      </div>

      <div className="AddCart">
        <h5>Add to cart</h5>
      </div>
    </div>
  )
}

export default ComponentTwo