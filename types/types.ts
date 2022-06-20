import { MicroCMSImage } from 'microcms-js-sdk';

export type Blog = {
    id: string;
    createdAt: string;
    updatedAt?: string;
    publishedAt?: string;
    revisedAt?: string;
    title?: string;
    content?: string;
    eyecatch?: MicroCMSImage;
    category: Category | null;
  };
  
  type Category = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publisedAt: string;
    revisedAt: string;
    name: string;
  };
