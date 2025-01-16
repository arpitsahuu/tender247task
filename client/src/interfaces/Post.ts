// Comment Interface
export interface IComment {
    author: string;
    content: string;
    createdAt?: Date;
  }
  
  // Blog Post Content Block Interface
  export interface IContentBlock {
    type: 'paragraph' | 'image';
    value: string;
  }
  
  // Blog Post Interface
  export interface IPost extends Document {
    _id: string;
    title: string;
    author: string;
    content: IContentBlock[];
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
    comments?: IComment[];
  }
  