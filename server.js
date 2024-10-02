import express from 'express';
import bcrypt from 'bcrypt';
import pkg from 'pg';
const {Pool} = pkg;

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL Pool configuration
const pool = new Pool({
  user: 'myappuser', // replace with your PostgreSQL username
  host: 'localhost',
  database: 'user_registration_db', // replace with your database name
  password: 'xentek2025', // replace with your PostgreSQL password
  port: 5432,
});

app.use(express.json()); // Middleware to parse JSON

// Root route
app.get('/', (res) => {
  res.send('Welcome to InfraShare API!');
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required!' });
  }

  try {
    // Check if email already exists
    const emailCheckQuery = 'SELECT * FROM users WHERE email = $1';
    const emailCheckValues = [email];
    const emailCheckResult = await pool.query(emailCheckQuery, emailCheckValues);

    if (emailCheckResult.rows.length > 0) {
      return res.status(400).json({ message: 'Email already in use!' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const insertQuery = 'INSERT INTO users (email, password) VALUES ($1, $2)';
    const insertValues = [email, hashedPassword];

    await pool.query(insertQuery, insertValues);
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    console.error('Error during registration:', error.message);
    console.error('Full error details:', error);
    res.status(500).json({ message: 'Failed to register. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
