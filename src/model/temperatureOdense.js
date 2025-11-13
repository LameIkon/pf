import mongoose from 'mongoose';

const TemperatureSchema = new mongoose.Schema({
    timestamp: {type: String },
    temperature: {type: Number}
});

export default mongoose.model('Temperature', TemperatureSchema);