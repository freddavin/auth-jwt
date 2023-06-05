import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    verbose: true,
    versionKey: false,
  }
);

export const User = mongoose.model<IUserModel>('User', userSchema);
