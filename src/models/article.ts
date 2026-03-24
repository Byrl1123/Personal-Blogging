
import mongoose, {Schema, Document } from "mongoose";

export interface IArticle extends Document {
    title: string;
    content: string;
    publishedDate?: Date;
    author: string;
    tags: string[];
};

const ArticleSchema = new Schema<IArticle>(
        {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        publishedDate: {
            type: Date,
            default: Date.now,
        },
        author: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);



export const Article = mongoose.model<IArticle>("Article", ArticleSchema);
