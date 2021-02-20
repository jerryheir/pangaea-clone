import { stat } from 'fs';
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../Styles';
import { colors } from '../Styles/Colors';

const ListAtom = ({ item, onPress }: any) => {
    const { width } = useWindowDimensions();
    const { currency } = useSelector((state: any) =>state.main);
    const device = width < 768;
    return (
        <View style={[styles.listAtomContainer, {
            width: device ? ((width - 60)/2) : ((width - 160)/3),
            marginHorizontal: device ? 10 : 20, 
        }]}>
            <Image 
            source={{ uri: item.image_url }}
            style={styles.listImage}
            resizeMode="contain"
            />
            <Text style={[styles.listTitle, {
                fontSize: device ? 12 : 14
            }]}>{item.title}</Text>
            <Text style={[styles.listPrice, {
                fontSize: device ? 12 : 14
            }]}>From: {currency}{item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
            <TouchableOpacity
            activeOpacity={.1}
            style={styles.addToCartButton}
            onPress={onPress}
            >
                <Text style={{ color: colors.white }}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListAtom;
