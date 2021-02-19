import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart, clearCart } from '../Actions';
import { styles } from '../Styles';
import { colors } from '../Styles/Colors';

const CartListAtom = ({ item }: any) => {
    const dispatch = useDispatch();
    const { currency, products } = useSelector((state: any)=>state.main);
    const getProduct = products.find((value: any)=>value.id === item.id);
    return (
        <View style={styles.cartListContainer}>
            <TouchableOpacity
            activeOpacity={1}
            onPress={()=>dispatch(clearCart(item))}
            style={styles.cardListCloseIcon}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </TouchableOpacity>
            <View style={styles.cardListFirstView}>
                <View>
                    <Text style={styles.cardListTitle}>{item.title}</Text>
                    <Text style={styles.cardListSubTitle}>MADE FOR: <Text style={{ fontWeight: '500', fontSize: 10 }}>You</Text></Text>
                </View>
                <View style={styles.rowCenter}>
                    <View style={styles.cardListAddView}>
                        <Text 
                        onPress={()=>dispatch(updateCart(item, false))}
                        style={styles.fontSize18}>-</Text>
                        <Text style={styles.fontSize18}>{item.quantity}</Text>
                        <Text 
                        onPress={()=>dispatch(updateCart(item, true))}
                        style={styles.fontSize18}>+</Text>
                    </View>
                    <Text style={{
                        fontFamily: 'Bau',
                    }}>{currency}{getProduct && (getProduct.price*item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
                </View>
            </View>
            <Image 
            source={{ uri: item.image_url }}
            style={styles.cartListImage}
            resizeMode="contain"
            />
        </View>
    )
}

export default CartListAtom;
