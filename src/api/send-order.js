const resendApiKey = process.env.RESEND_API_KEY;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (!resendApiKey) {
    return res.status(500).json({
      error: "RESEND_API_KEY is not configured.",
    });
  }

  try {
    const { customer, cart, total } = req.body;

    if (!customer || !cart || !cart.length) {
      return res.status(400).json({
        error: "Order information is incomplete.",
      });
    }

    let productsHtml = "";

    cart.forEach((item) => {
      const name = item.name || item.title || "Product";
      const quantity = Number(item.quantity) || 1;
      const price = Number(item.price) || 0;

      productsHtml += `
        <tr>
          <td style="padding:12px;border-bottom:1px solid #ddd;">
            ${name}
          </td>

          <td style="padding:12px;border-bottom:1px solid #ddd;">
            ${quantity}
          </td>

          <td style="padding:12px;border-bottom:1px solid #ddd;">
            ${price.toLocaleString()} DA
          </td>
        </tr>
      `;
    });

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;">

        <div style="
          background:#050505;
          padding:25px;
          color:#d4af37;
        ">
          <h1>Q LIGHT</h1>
          <p>New Order</p>
        </div>

        <div style="padding:25px;">

          <h2>Customer Information</h2>

          <p>
            <strong>Name:</strong>
            ${customer.firstName} ${customer.lastName}
          </p>

          <p>
            <strong>Email:</strong>
            ${customer.email}
          </p>

          <p>
            <strong>Address:</strong>
            ${customer.address}
          </p>

          <p>
            <strong>City:</strong>
            ${customer.city}
          </p>

          <p>
            <strong>Country:</strong>
            ${customer.country}
          </p>

          <h2>Products</h2>

          <table style="
            width:100%;
            border-collapse:collapse;
          ">

            <thead>
              <tr>
                <th style="padding:12px;text-align:left;">
                  Product
                </th>

                <th style="padding:12px;text-align:left;">
                  Quantity
                </th>

                <th style="padding:12px;text-align:left;">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              ${productsHtml}
            </tbody>

          </table>

          <h2 style="margin-top:30px;">
            Total: ${Number(total).toLocaleString()} DA
          </h2>

        </div>
      </div>
    `;

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Q LIGHT <onboarding@resend.dev>",
          to: ["yassermorsli063@gmail.com"],
          subject: `Q LIGHT - New Order from ${customer.firstName} ${customer.lastName}`,
          html: emailHtml,
        }),
      }
    );

    const result = await resendResponse.json();

    if (!resendResponse.ok) {
      return res.status(resendResponse.status).json({
        error: result.message || "Resend failed.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order sent successfully.",
      id: result.id,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Server error while sending order.",
    });
  }
}