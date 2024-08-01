// pages/[slug].js
import { getWordPressProps, WordPressTemplate } from '@faustwp/core';

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export function getStaticProps(ctx) {
  return getWordPressProps({ ctx });
}

export async function getStaticPaths() {
  try {
    // Fetch all pages from WordPress backend
    const { data } = await fetch('https://devlr.websiteserverhost.biz/wpproheadless/wppro/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query AllPagesQuery {
            pages {
              nodes {
                slug
              }
            }
          }
        `,
      }),
    }).then((res) => res.json());

    // Generate paths based on fetched page data
    const paths = data?.data?.pages?.nodes.map((page) => ({
      params: { slug: page.slug },
    })) || [];

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return an empty array of paths or handle the error case as needed
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}