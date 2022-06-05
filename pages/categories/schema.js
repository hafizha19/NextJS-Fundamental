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

export const GET_PRODUCT_BY_CATEGORY = gql`
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
`