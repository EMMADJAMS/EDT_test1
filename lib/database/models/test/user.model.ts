import { Schema, model, models } from "mongoose";
import { buffer } from "stream/consumers";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: buffer,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;