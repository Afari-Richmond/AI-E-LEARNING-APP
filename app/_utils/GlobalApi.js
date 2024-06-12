import { request, gql } from 'graphql-request';

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

// Log MASTER_URL to verify it's constructed correctly
console.log(MASTER_URL);

const getAllCourseList = async () => {
  const query = gql`
    query Courses {
      courses {
        free
        id
        name
        price
        sourceCode
        totalChapters
        author
        videoLink
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    // Log the result to verify the response
    console.log(result);
    return result;
  } catch (error) {
    // Log the error for debugging purposes
    console.error('GraphQL request error:', error);
    return null;
  }
}

export default {
  getAllCourseList
};
