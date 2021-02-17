import gql from 'graphql-tag';

export const PRODUCT_QUERY = gql`
    {
        products {
            id
            title
            image_url
            price (currency: USD)
            product_options {
                title
                prefix
                suffix
            }
        }
    }
`;