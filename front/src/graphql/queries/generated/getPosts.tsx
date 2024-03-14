/* tslint:disable */ /* eslint-disable */
import * as Types from '../../models/generated/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type PostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PostsQuery = { posts?: { nodes: Array<{ id: string, title?: string, excerpt?: string, commentCount?: number, content?: string, author?: { node: { name?: string, email?: string } }, categories?: { nodes: Array<{ name?: string }> }, featuredImage?: { node: { uri?: string, link?: string, srcSet?: string } }, contentType?: { node: { name?: string, description?: string } } }> } };


export const PostsDocument = gql`
    query Posts {
  posts {
    nodes {
      id
      author {
        node {
          name
          email
        }
      }
      categories {
        nodes {
          name
        }
      }
      title
      excerpt
      featuredImage {
        node {
          uri
          link
          srcSet
        }
      }
      commentCount
      content
      contentType {
        node {
          name
          description
        }
      }
    }
  }
}
    `;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;