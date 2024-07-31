import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

const GET_PAGE_ID = gql`
  query GetPageId($uri: String!) {
    pageBy(uri: $uri) {
      id
    }
  }
`;

function usePageId() {
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_PAGE_ID, {
    variables: { uri: router.asPath.replace('/', '') },
    onError: (error) => {
      console.error("Error fetching page ID:", error);
    }
  });

  const pageId = data?.pageBy?.id ? parseInt(data.pageBy.id) : null;

  return {
    pageId,
    loading,
    error,
  };
}

export default usePageId;
