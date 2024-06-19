import mongoose from "mongoose";

export async function ConnectionDB(URI: string) {
  try {
    await mongoose.connect(URI);
    console.log({ msg: "Connection successfully" });
  } catch (error) {
    console.log({ msg: "Error in connection", error });
  }
}
