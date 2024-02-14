import React, { Fragment, useState, useEffect } from "react";

const ComponentTwo = () => {

  const [priceData, setPriceData] = useState('');
  const [descriptionData, setDescriptionData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/items');
        if (!response.ok) {
          throw new Error('Failed to fetch shipping data');
        }
        const data = await response.json();
        console.log('data', data[0].price)
        setPriceData(data[0].price);
        setDescriptionData(data[0].item_description)
      } catch (error) {
        console.error('Error fetching shipping data', error)
      }
    }
    
    fetchData();
  }, []);


  let description = "Introducing our versatile chain collection, available in gold, silver, and stainless steel finishes, with lengths ranging from 14mm to 18mm, ensuring there's a perfect match for every style and occasion. Crafted with precision and durability in mind, our chains offer timeless elegance and effortless customization to elevate your look with ease."
  let finish = ['Gold', 'Silver', 'Stainless Steel']
  let length = ['12mm', '16mm', '18mm']

  return (
    <div className="Info">
      <p style={{ color: 'darkred' }}>In 20+ carts</p>
      <h3 style={{ color: 'green' }}>{priceData}</h3>
      <h6 style={{ color: 'green' }}>20% off sale for the next 4 hours</h6>
      <p className="Description">{descriptionData}</p>
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