const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Customer = require('./path/to/your/customer/model'); // Adjust the path as needed

const Login = async (req, res, next) => {
  const { password, email } = req.body;

  try {
    const customer = await Customer.findOne({ businessEmail: email });

    if (!customer) {
      return res.status(404).json({
        success: false,
        emailFound: false,
        message: "Email not found",
      });
    }

    const isMatch = await bcrypt.compare(password, customer.accountPassword);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        passwordFound: false,
        message: "The password did not match",
      });
    }

    const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Login successful', 
      userId: customer._id 
    });

  } catch (error) {
    next(error);
  }
};


module.exports = { Login }
