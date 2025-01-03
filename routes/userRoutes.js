import express from 'express';
const router = express.Router();

// Correct route for user registration
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: '⚠️ Name, email, and password are required!' });
    }
    res.status(201).json({ message: '✅ User registered successfully!' });
});

export default router;

// import express from 'express';
// import { registerUser, loginUser, getAllUsers } from '../controllers/userController.js';

// const router = express.Router();

// router.post('/register', registerUser); // POST /api/users/register
// router.post('/login', loginUser); // POST /api/users/login
// router.get('/', getAllUsers); // GET /api/users/

// export default router;

// import express from 'express';
// const router = express.Router();

// // User Registration Endpoint
// router.post('/register', (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({ message: '⚠️ All fields are required!' });
//     }

//     // Simulating a successful registration
//     res.status(201).json({
//         message: '✅ User registered successfully!',
//         user: { name, email },
//     });
// });

// // User Login Endpoint
// router.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: '⚠️ Email and password are required!' });
//     }

//     // Allow login for everyone
//     res.status(200).json({
//         message: '✅ Login successful!',
//         user: { email },
//     });
// });

// export default router;

// import express from 'express';
// const router = express.Router();

// // User Registration Endpoint
// router.post('/register', (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({ message: '⚠️ All fields are required!' });
//     }

//     // Simulating a successful registration
//     res.status(201).json({ message: '✅ User registered successfully!', user: { name, email } });
// });

// // User Login Endpoint
// router.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: '⚠️ Email and password are required!' });
//     }

//     // Simulating a simple login check
//     if (email === 'test@example.com' && password === 'password123') {
//         return res.status(200).json({ message: '✅ Login successful!' });
//     }

//     res.status(401).json({ message: '❌ Invalid email or password!' });
// });

// export default router;


