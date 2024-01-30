import { connect } from "mongoose";

export async function connectToDb() {
  try {
    await connect(process.env.DATABASE_URL as string);
  } catch (error) {
    console.log(error);
  }
}
