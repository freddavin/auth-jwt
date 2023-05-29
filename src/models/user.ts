import mongoose, { Schema } from 'mongoose';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

const userSchema: Schema = new Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>('User', userSchema);
