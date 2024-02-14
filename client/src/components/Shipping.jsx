import React, { useEffect, useState } from 'react';
import ShippingDate from './ShippingDate';
import toggleExpansion from '../helpers/toggleExpansion';
import ItemDetails from './ItemDetails';
import '../styles/Shipping.css';

function ShippingAndReturnInfo() {
  const [expandedShipping, setExpandedShipping] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(false);
  const [expandedSeller, setExpandedSeller] = useState(false);
  const [expandedReturn, setExpandedReturn] = useState(false);
  const [expandedMaterial, setExpandedMaterial] = useState(false);
  const [expandedProcessing, setExpandedProcessing] = useState(false);
  const [expandedCare, setExpandedCare] = useState(false);
  const [expandedLost, setExpandedLost] = useState(false);
  const [expandedDefect, setExpandedDefect] = useState(false);
  const [shippingData, setShippingData] = useState({});
  const [customerData, setCustomerData] = useState({});

  
  useEffect(() => {
    const fetchShippingData = async () => {
      try {
        const response = await fetch('http://localhost:8000/shipping');
        if (!response.ok) {
          throw new Error('Failed to fetch shipping data');
        }
        const data = await response.json();
        setShippingData(data)
      } catch (error) {
        console.error('Error fetching shipping data', error)
      }
    }
    
    const fetchCustomerData = async () => {
      try {
        const response = await fetch('http://localhost:8000/customer');
        if (!response.ok) {
          throw new Error('Failed to fetch shipping data');
        }
        const data = await response.json();
        setCustomerData(data)
      } catch (error) {
        console.error('Error fetching shipping data', error)
      }
    }

    fetchShippingData();
    fetchCustomerData();
  }, []);

  return (
    <div className="shipping-info-container">
      <ItemDetails />
      <h2 onClick={toggleExpansion(expandedShipping, setExpandedShipping)}>Shipping and return policies</h2>
      {expandedShipping && (
        <div>
          <ShippingDate />
          <p>Returns & exchanges accepted within 14 days</p>
          <p>Cost to ship: ${shippingData.shipping_cost}</p>
          <p>Deliver to {customerData.delivery_country}, {customerData.delivery_zip}</p>
          <p>Ships from {shippingData.origin_city}, {shippingData.origin_state}</p>
        </div>
      )}
      <h2 onClick={toggleExpansion(expandedFAQ, setExpandedFAQ)}>FAQs</h2>
      {expandedFAQ && (
        <div className='faq-container'>
          <div className='faqs' onClick={toggleExpansion(expandedReturn, setExpandedReturn)}>RETURN POLICY</div>
          {expandedReturn && (<p>
            We gladly accept returns unless your product is customized. However, please contact us if you encounter any problems regarding your jewelry. We'll do our best to make you satisfied with your purchase.
            </p>)}
          <div className='faqs' onClick={toggleExpansion(expandedMaterial, setExpandedMaterial)}>MATERIAL</div>
          {expandedMaterial && (<p>
            All our products are solid sterling silver. Gold and Rose Gold options are covered with a thick layer of 14K gold.
            </p>)}
          <div className='faqs' onClick={toggleExpansion(expandedProcessing, setExpandedProcessing)}>PROCESSING TIME</div>
          {expandedProcessing && (<p>
            All orders are shipped within 1-2 business days. Regular shipping usually takes 4-6 business days. Expedited shipping takes 2-4 days.
            </p>)}
          <div className='faqs' onClick={toggleExpansion(expandedCare, setExpandedCare)}>CARE INSTRUCTIONS</div>
          {expandedCare && (<p>
            - Beware of extreme weather changes, moisture, and heat.<br />
            - Don't use chemicals to clean your jewelry. You can use a damp or dry cloth.<br />
            - If you are not going to use your jewelry for a long time, please keep it in an air-tight container. Also, make sure to store each jewelry piece separately since they might scratch each other.<br />
            - Chemicals you use in the shower, or chemicals used in swimming pools might harm your jewelry.<br />
            </p>)}
          <div className='faqs' onClick={toggleExpansion(expandedLost, setExpandedLost)}>"My order seems to be lost in the mail, what should I do?"</div>
          {expandedLost && (<p>
            If you cannot find a solution after contacting the carrier, please message us on Etsy and we'll help you solve the problem swiftly.
            </p>)}
          <div className='faqs' onClick={toggleExpansion(expandedDefect, setExpandedDefect)}>"I think there's something wrong with my product, what should I do?"</div>
          {expandedDefect && (<p>
            If you encounter any problems regarding your product or purchasing process, please message us on Etsy and we'll do our best to compensate for your problem.
            </p>)}
        </div>
      )}
      <h2 onClick={toggleExpansion(expandedSeller, setExpandedSeller)}>Meet your sellers</h2>
      {expandedSeller && (<div className='seller-name'>Apollonia</div>)}
    </div>
  );
}

export default ShippingAndReturnInfo;
