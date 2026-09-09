import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document, BLOCKS } from '@contentful/rich-text-types';

export const contentfulClient = createClient({
  space: '9qhlot28sg5u',
  accessToken: 'jFE7qe9gJqHdY2MN8-4egVOERuuw408r1CQ5dsOtXjk',
});

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { url, description } = node.data.target.fields.file;
      return `<img src="https:${url}" alt="${description || ''}" class="w-full rounded-lg my-8" />`;
    },
  },
};

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  author: string;
  imageUrl: string;
  date: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: '-fields.date',
    include: 2, // Include assets and linked entries
  });

  return response.items.map((item: any) => {
    // Get the featured image URL
    const featuredImage = item.fields.featuredImage?.fields?.file;
    const imageUrl = featuredImage ? `https:${featuredImage.url}` : '';

    return {
      title: item.fields.title,
      slug: item.fields.slug,
      content: documentToHtmlString(item.fields.content as Document, renderOptions),
      author: item.fields.author,
      imageUrl: imageUrl,
      date: item.fields.date,
    };
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
    include: 2, // Include assets and linked entries
  });

  if (!response.items.length) {
    return null;
  }

  const item = response.items[0];
  
  // Get the featured image URL
  const featuredImage = item.fields.featuredImage?.fields?.file;
  const imageUrl = featuredImage ? `https:${featuredImage.url}` : '';

  return {
    title: item.fields.title,
    slug: item.fields.slug,
    content: documentToHtmlString(item.fields.content as Document, renderOptions),
    author: item.fields.author,
    imageUrl: imageUrl,
    date: item.fields.date,
  };
}