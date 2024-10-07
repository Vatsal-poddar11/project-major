const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require('./routes/Payment');
const Upload = require("./routes/FileUpload");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

database.connect();

// Cloudinary Connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
	'http://localhost:3000',
];

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin) return callback(null, true);
		if (allowedOrigins.indexOf(origin) === -1) {
			const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	},
	optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use("/api/v1/upload", Upload);

//default route
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: 'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})