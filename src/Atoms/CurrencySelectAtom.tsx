import { View } from 'react-native';
import { CURRENCY_QUERY } from '../Queries';
import { Query } from 'react-apollo';
import { colors } from '../Styles/Colors';
import { styles } from '../Styles';

const CurrencySelectAtom = ({ onChange, value }: any) => {
    return (
        <View style={styles.currencySelectContainer}>
            <Query query={CURRENCY_QUERY}>
                {(result: any) => {
                    const { loading, error, data } = result;
                    if (loading) return null;
                    if (error) {
                        console.log(error)
                        return <h4>Error !!!</h4>
                    }
                    return (
                        <select
                        style={{ 
                            display: 'flex',
                            width: 60,
                            height: 25,
                            borderWidth: 0,
                            backgroundColor: colors.white,
                            fontFamily: 'Bau',
                            fontSize: 14
                        }}
                        onChange={(e)=>onChange(e.target.value)}
                        value={value}
                        >
                        {data.currency && data.currency.length > 0 && data.currency.map((item: any, key: number) => {
                            return (
                            <option value={item} key={key}>
                                {item}
                            </option>
                            );
                        })}
                        </select>
                    )
                }}
            </Query>
        </View>
    )
}

export default CurrencySelectAtom;