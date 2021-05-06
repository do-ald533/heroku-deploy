import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.vlkm9.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			}
		);
		console.log(`connect DB: ${conn.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
