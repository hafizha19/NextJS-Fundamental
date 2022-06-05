import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    {
        categories(filters:{}) {
            items {
                name
                id
            }
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query getProductsByCategory($categoryId: String) {
        products(filter: {
          category_id: {
            eq: $categoryId
          }
        }) {
          items {
            name,
            id,
            sku
          }
        }
      }
`;

export const GET_CATEGORY_BY_ID = gql`
    query getCategories($categoryId: Int) {
        category(id: $categoryId) {
            name
            id
        }
    }
`;

export const POST_SUBSCRIBE = gql`
    mutation subseribeEmail($email : String) {
        subscribe(
            input: {email: $email}
        ) {
            status {
                code
                message
                response
            }
        }
    }
`;

export const GET_PRODUCT_BY_SKU = gql`
    query getProduct($sku: String) {
        products(pageSize: 20, search: "", filter: {
        sku: {
            eq: $sku
          }
        }) {
          items {
            id,
            name,
            price {
                regularPrice {
                    amount {
                        value
                    }
                }
            },
            sku,
            image {
                url
            },
            description {
                html
            },
            categories {
              name,
              id
            }
          }
        }
    }
`