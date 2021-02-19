import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../Actions';
import CartListAtom from '../Atoms/CartListAtom';
import CurrencySelectAtom from '../Atoms/CurrencySelectAtom';
import { styles } from '../Styles';
import { colors } from '../Styles/Colors';

const SideMenu = ({ onClose }: any) => {
    const dispatch = useDispatch();
    const { currency, cart, products } = useSelector((state: any)=>state.main);
    const getTotal = () => {
        let number = 0;
        cart.forEach((item: any)=>{
            const getProduct = products.find((value: any)=>value.id === item.id);
            if (getProduct && getProduct.price){
                const result = getProduct.price*item.quantity;
                number+=result
            }
        })
        return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return (
        <View style={styles.sideMenuContainer}>
            <View style={styles.sideMenuHeader}>
                <View style={styles.sideMenuBackIcon}>
                    <TouchableOpacity
                    activeOpacity={1}
                    onPress={onClose}
                    style={styles.sideMenuChevronRight}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </TouchableOpacity>
                </View>
                <Text>YOUR CART</Text>
            </View>
            <CurrencySelectAtom 
            onChange={(value: string)=>dispatch(setCurrency(value))}
            value={currency}
            />
            <ScrollView>
                {cart && cart.length > 0 && cart.map((item: any, key: number)=>{
                    return (<CartListAtom 
                    key={key}
                    item={item}
                    />)
                })}
                {
                    cart.length === 0 &&
                    <Text style={styles.listTitle}>There are no items in your cart.</Text>
                }
            </ScrollView>
            <View style={styles.sideMenuFooter}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 20
                }}>
                    <Text style={styles.subTotalText}>Subtotal:</Text>
                    <Text style={styles.subTotalAmount}>{currency}{getTotal()}</Text>
                </View>
                <TouchableOpacity
                activeOpacity={.5}
                style={styles.checkoutButton}
                onPress={()=>{}}
                >
                    <Text style={{ color: colors.white }}>PROCEED TO CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SideMenu;
