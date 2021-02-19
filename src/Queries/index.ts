import gql from 'graphql-tag';

export const PRODUCT_QUERY = gql`
query Product ($currency: Currency) {
    products {
        id
        title
        image_url
        price (currency: $currency)
        product_options {
            title
            prefix
            suffix
            options {
                id
                value
            }
        }
    }
}
`;

export const CURRENCY_QUERY = gql`
    {
        currency
    }
`;