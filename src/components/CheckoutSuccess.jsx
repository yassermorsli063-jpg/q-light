import React from "react";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="checkout-page">
      <div className="checkout-shell">
        <div className="checkout-card success-card">
          <h2>تم تأكيد الطلب بنجاح</h2>
          <p>شكرًا لك! تم استلام طلبك بنجاح وهو قيد المعالجة الآن.</p>
          <Link to="/products" className="back-link success-link">
            متابعة التسوق
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
