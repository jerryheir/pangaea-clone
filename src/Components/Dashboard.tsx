import React from 'react';
import { View } from 'react-native';
import { Query } from 'react-apollo';
import { PRODUCT_QUERY } from '../Queries';

const Dashboard: React.FC = () => {
    return (
        <View>
            <Query query={PRODUCT_QUERY}>
                {(result: any) => {
                    const { loading, error, data } = result;
                    if (loading) return <h4>Loading ...</h4>
                    if (error) {
                        console.log(error)
                        return <h4>Error !!!</h4>
                    }
                    console.log(data);
                    return <h1>test</h1>
                }}
            </Query>
        </View>
    )
}

export default Dashboard;
