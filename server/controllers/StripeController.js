require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_TEST_API_KEY);

const createCheckOutSession = async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",

        product_data: {
          name: item.name,

          description: item.desc,

          images: [item.image],
        },

        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: "payment",

    success_url: `${process.env.CLIENT_URL}/checkout/success`,

    cancel_url: `${process.env.CLIENT_URL}/checkout/cancel`,
  });

  res.send({
    url: session.url,
  });
};
module.exports = { createCheckOutSession };
