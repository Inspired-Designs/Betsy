import React from 'react';

const ShippingDate = () => {
  const currentDate = new Date();
  const estimatedArrivalDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  const arrivalMonth = new Intl.DateTimeFormat('en', { month: 'short' }).format(estimatedArrivalDate);
  const arrivalDay = estimatedArrivalDate.getDate();
  const arrivalEndDay = new Date(estimatedArrivalDate.getTime() + 7 * 24 * 60 * 60 * 1000).getDate();

  const formattedDate = `${arrivalMonth} ${arrivalDay}-${arrivalEndDay}`;

  return (
    <p>Order today to get by {formattedDate}</p>
  );
};

export default ShippingDate;
