import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // المستخدم الذي كتب المراجعة
  rating: { type: Number, required: true }, // تقييم المستخدم
  comment: { type: String, required: true }, // تعليق المراجعة
  reviewFor: { 
    type: String, 
    enum: ['Destination', 'Accommodation', 'Transportation'], 
    required: true 
  }, // المراجعة موجهة لأي نوع من الخدمات
  referenceId: { type: mongoose.Schema.Types.ObjectId, required: true } // الـ ID للوجهة أو الإقامة أو وسيلة النقل
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;
