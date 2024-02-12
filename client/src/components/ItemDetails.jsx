import React, { useState } from 'react';
import toggleExpansion from '../helpers/toggleExpansion';

const ItemDetails = () => {
  const [expandedDetails, setExpandedDetails] = useState(false);

  return (
    <div>
      <h2 onClick={() => setExpandedDetails(!expandedDetails)}>Item Details</h2>
      {expandedDetails && (
        <div>
          <h3>Handmade item</h3>
          <p>
            Materials: Gold, Rose gold, White gold
            <br />
            Closure: Spring ring
            <br />
            Chain style: Cable
            <br />
            Style: Minimalist
            <br />
            Made to Order
          </p>
          <p>
            <span role="img" aria-label="heart">❤️</span> 100% CUSTOMER SATISFACTION GUARANTEE <span role="img" aria-label="heart">❤️</span>
          </p>
          <p>
            - Please message us if you encounter any problems regarding your order process or the product and 
            <strong> we will help you right away!</strong>
          </p>

          <h4><span role="img" aria-label="sparkles">✨</span> PRODUCT FEATURES <span role="img" aria-label="sparkles">✨</span></h4>
          <ul>
            <li>Material: 925 Sterling Silver & 14K Gold Vermeil (Thick layer of gold outside the silver, it doesn't tarnish like gold plated jewelry)</li>
            <li>Color: Gold, Silver, and Rose Gold available</li>
          </ul>

          <h4><span role="img" aria-label="hourglass">⏳</span> TURNAROUND <span role="img" aria-label="hourglass">⏳</span></h4>
          <ul>
            <li>Our production process takes only 1-2 business days.</li>
            <li>The shipping usually takes 4-6 business days.</li>
            <li>Express shipping takes 2-4 business days.</li>
          </ul>

          <h4><span role="img" aria-label="tree">🌳</span> PLANT A TREE <span role="img" aria-label="tree">🌳</span></h4>
          <ul>
            <li>As Apollonia, we plant a tree for every purchase you made! We send you a confirmation e-mail after your purchase.</li>
            <li>One of our main goals is to help nature heal and make the world a better place to live.</li>
            <li>Carbon emission of our production cycle is 0 since we cover it up by planting a tree for every piece of jewelry sold.</li>
            <li>Thank you so much for being part of this act and helping nature!</li>
          </ul>

          <h4><span role="img" aria-label="gift">🎁</span> PERFECT GIFT <span role="img" aria-label="gift">🎁</span></h4>
          <ul>
            <li>All your orders come in a dainty and elegant gift box with high-quality packaging.</li>
            <li>You don't need to pay extra for a gift box.</li>
            <li>You can add a gift note while placing your order, and we will be happy to attach the note to your order.</li>
          </ul>

          <h4><span role="img" aria-label="sparkles">💫</span> HOW TO ORDER <span role="img" aria-label="sparkles">💫</span></h4>
          <ul>
            <li>Choose the color you prefer (Gold, Silver, and Rose Gold available)</li>
            <li>Choose the necklace length you prefer</li>
            <li>If the product requires personalization, enter the personalization info and the font style you prefer</li>
            <li>Feel free to message us on Etsy with any questions!</li>
          </ul>

          <h4><span role="img" aria-label="speech balloon">💬</span> CUSTOM ORDERS <span role="img" aria-label="speech balloon">💬</span></h4>
          <ul>
            <li>Feel free to contact us on Etsy with any custom design or dimension requests.</li>
            <li>Please contact us for a discount if you consider bulk purchases or wholesale.</li>
          </ul>

          <h3><span role="img" aria-label="heart">❤️</span> MORE FROM APOLLONIA <span role="img" aria-label="heart">❤️</span></h3>
          <p>
            All our products are handcrafted with precision. We love and care for our jewelry, and we aim for excellence in each piece we produce. We hope you enjoy shopping with us!
            <br />
            Store: <a href="etsy.com/shop/ApolloniaJewelryInc">etsy.com/shop/ApolloniaJewelryInc</a>
            <br />
            About us: <a href="https://etsy.me/3iZRdwM">etsy.me/3iZRdwM</a>
            <br />
            Social media: <a href="https://instagram.com/ApolloniaJewelry">instagram @ApolloniaJewelry</a>, <a href="https://facebook.com/ApolloniaJewelry">facebook @ApolloniaJewelry</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default ItemDetails;