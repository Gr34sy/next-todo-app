
import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'User already registered with this email'],
        required: [true, 'Email is required'],
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    image: {
        type: String,
    },
    theme: {
        type: String,
    },
    lists: {
        type: Array,
    },
    tasklists: {
        type: Array,
    },
})

const User = models?.User || model('User', UserSchema);

export default User;