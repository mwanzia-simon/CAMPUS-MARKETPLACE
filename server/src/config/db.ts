import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database connected succesifully!");
  } catch (error) {
    console.log(`MONGODB ERROR: ${error} `);
    process.exit(1);
  }
};
