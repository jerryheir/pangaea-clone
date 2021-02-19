import { StyleSheet } from 'react-native';
import { colors } from './Colors';

export const styles = StyleSheet.create({
    cartListContainer: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 145,
        marginHorizontal: 20,
        marginVertical: 10
    },
    cardListCloseIcon: {
        position: 'absolute',
        top: 11,
        right: 11,
        zIndex: 99
    },
    cardListFirstView: {
        flex: 1,
        height: 145,
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginRight: 20
    },
    cardListTitle: {
        fontFamily: 'Bau',
        fontWeight: '800'
    },
    cardListSubTitle: {
        fontFamily: 'Bau',
        fontWeight: '800',
        fontSize: 12
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardListAddView: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lighterGreen,
        height: 40,
        width: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    fontSize18: {
        fontSize: 18
    },
    cartListImage: {
        width: 124,
        height: '60%'
    },
    currencySelectContainer: {
        width: 70,
        height: 25,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 11,
        backgroundColor: colors.lighterBg,
        shadowColor: 'rgba(0,0,0,.1)',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 1,
        shadowOpacity: 1,
        elevation: 2,
        zIndex: 99
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        height: 44,
        width: 154
    },
    logoTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 60
    },
    logoText: {
        fontSize: 14,
        fontFamily: 'Bau',
        color: colors.black,
        marginHorizontal: 21
    },
    listImage: {
        width: '100%',
        height: 150
    },
    addToCartButton: {
        backgroundColor: colors.darkGreen,
        height: 52,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listTitle: {
        textAlign: 'center',
        color: colors.black,
        fontFamily: 'Bau',
        paddingTop: 14
    },
    listPrice: {
        textAlign: 'center',
        color: colors.black,
        fontFamily: 'Bau',
        paddingTop: 18,
        paddingBottom: 14
    },
    sideMenuContainer: {
        flex: 1,
        backgroundColor: colors.lighterBg
    },
    sideMenuHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70
    },
    sideMenuBackIcon: {
        position: 'absolute',
        left: 0, top: 0,
        height: 70, 
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideMenuChevronRight: {
        height: 25,
        width: 25,
        borderRadius: 12.5,
        borderColor: colors.black,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sideMenuFooter: {
        backgroundColor: colors.lighterBg,
        shadowColor: 'rgba(0,0,0,.1)',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 5,
        elevation: 5,
        zIndex: 99,
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    sideMenuSubTotalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    subTotalText: {
        fontSize: 12,
        fontFamily: 'Bau'
    },
    subTotalAmount: {
        fontFamily: 'Bau',
        fontWeight: 'bold',
        fontSize: 14
    },
    checkoutButton: {
        backgroundColor: colors.darkGreen,
        height: 52,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})