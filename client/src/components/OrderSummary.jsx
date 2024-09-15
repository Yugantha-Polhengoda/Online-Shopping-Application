// OrderSummary.js
import React from "react";

const OrderSummary = ({ cartData, currency }) => {
  const subtotal = cartData
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const shipping = 10.0;
  const taxes = 5.0;
  const total = (parseFloat(subtotal) + shipping + taxes).toFixed(2);

  return (
    <div className="mb-6">
      <div className="py-2">
        <h5 className="text-lg font-bold">Order Summary</h5>
      </div>
      <div className="px-4 pt-8">
        <div className="mb-2 text-gray-600">
          Subtotal:{" "}
          <span className="float-end">
            {currency} {subtotal}
          </span>
        </div>
        <div className="mb-2 text-gray-600">
          Shipping:{" "}
          <span className="float-end">
            {currency} {shipping.toFixed(2)}
          </span>
        </div>
        <div className="mb-2 text-gray-600">
          Taxes:
          <span className="float-end">
            {currency} {taxes.toFixed(2)}
          </span>{" "}
        </div>
        <div className="border-t pt-2 mt-2 font-bold pb-4">
          <span className="float-end">
            Total: {currency} {total}
          </span>
        </div>
        {/* <div className="mt-4">
          *For United States, France and Germany applicable sales tax will be
          applied
        </div> */}
      </div>
    </div>
  );
};

export default OrderSummary;
