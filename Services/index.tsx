import { gql, request } from "graphql-request"


export const getMainDate = async () => {
    const query = gql`
    query Projects {
        projects {
          about
          createdAt
          id
          link
          name
          publishedAt
          updatedAt
          image {
            url
          }
        }
      }      
    `

    const result = await request('https://api-ap-south-1.hygraph.com/v2/clo1cii0tb3yy01uj9u211p7g/master', query);
    return result;
}