import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "الجزائر",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity),
    0
  );

  const total = subtotal;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!cart.length) {
      alert("سلة التسوق فارغة.");
      return;
    }

    const requiredFields = [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.address,
      formData.city,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      alert("يرجى ملء جميع بيانات الشحن.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: formData,
          cart: cart,
          total: total,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "تعذر إرسال الطلب."
        );
      }

      setCart([]);
      setOrderPlaced(true);
    } catch (error) {
      console.error("Order error:", error);

      setSubmissionError(
        error.message ||
          "تعذر إرسال الطلب. حاول مرة أخرى."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="checkout-shell">
          <div className="checkout-card success-card">
            <div
              style={{
                fontSize: "55px",
                color: "#d4af37",
                marginBottom: "15px",
              }}
            >
              ✓
            </div>

            <h2>تم تأكيد الطلب بنجاح</h2>

            <p>
              شكرًا لك {formData.firstName}!
              <br />
              تم إرسال طلبك بنجاح.
            </p>

            <Link
              to="/products"
              className="back-link success-link"
            >
              متابعة التسوق
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!cart.length) {
    return (
      <div className="checkout-page">
        <div className="checkout-shell">
          <div className="checkout-card empty-checkout-card">
            <h2>سلة التسوق فارغة</h2>

            <p>
              أضف بعض المنتجات قبل إتمام الطلب.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="place-order-btn"
            >
              الذهاب إلى المنتجات
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-shell">

        <div className="checkout-header">
          <span className="checkout-logo">Q</span>
          <h1>الدفع</h1>
        </div>

        <div className="checkout-content">

          <section className="checkout-card checkout-form-card">
            <h2>بيانات الشحن</h2>

            <form
              className="checkout-form"
              onSubmit={handleSubmit}
            >

              <div className="form-grid">

                <div className="input-group">
                  <label htmlFor="firstName">
                    الاسم
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="ادخل اسمك"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">
                    اللقب
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="ادخل لقبك"
                  />
                </div>

              </div>

              <div className="input-group">
                <label htmlFor="email">
                  البريد الإلكتروني
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>

              <div className="input-group">
                <label htmlFor="address">
                  العنوان
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="عنوان الشحن"
                />
              </div>

              <div className="form-grid">

                <div className="input-group">
                  <label htmlFor="city">
                    المدينة
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="المدينة"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="country">
                    الدولة
                  </label>

                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option>الجزائر</option>
                    <option>فرنسا</option>
                    <option>المغرب</option>
                    <option>تونس</option>
                  </select>
                </div>

              </div>

              <button
                className="place-order-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "جارٍ إرسال الطلب..."
                  : "تأكيد الطلب"}
              </button>

              {submissionError && (
                <p
                  role="alert"
                  className="checkout-error"
                >
                  {submissionError}
                </p>
              )}

            </form>
          </section>

          <aside className="checkout-card checkout-summary-card">

            <h2>ملخص الطلب</h2>

            {cart.map((item) => (
              <div
                className="order-item"
                key={item.id}
              >
                <div>
                  <strong>
                    {item.name || item.title}
                  </strong>

                  <span>
                    الكمية: {item.quantity}
                  </span>
                </div>

                <span>
                  {(
                    Number(item.price) *
                    Number(item.quantity)
                  ).toLocaleString()}{" "}
                  DA
                </span>
              </div>
            ))}

            <div className="summary-line">
              <span>المجموع</span>

              <strong>
                {subtotal.toLocaleString()} DA
              </strong>
            </div>

            <div className="summary-line">
              <span>التوصيل</span>

              <strong>مجاني</strong>
            </div>

            <div className="summary-total">
              <span>الإجمالي</span>

              <strong>
                {total.toLocaleString()} DA
              </strong>
            </div>

            <Link
              to="/cart"
              className="back-link"
            >
              العودة إلى السلة
            </Link>

          </aside>

        </div>
      </div>
    </div>
  );
}

export default Checkout;