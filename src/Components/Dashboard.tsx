import React, { useRef } from 'react';
import { View, ScrollView, Text, Animated, StyleSheet, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Query } from 'react-apollo';
import { PRODUCT_QUERY } from '../Queries';
import HeaderAtom from '../Atoms/HeaderAtom';
import SelectAtom from '../Atoms/SelectAtom';
import { colors } from '../Styles/Colors';
import { toggleMenu, saveProducts, updateCart } from "../Actions";
import ListAtom from '../Atoms/ListAtom';
import SideMenu from './SideMenu';

const Dashboard: React.FC = () => {
    const animateMenu = useRef(new Animated.Value(0));
    const dispatch = useDispatch();
    const { open, currency } = useSelector((state: any)=>state.main);
    const { width } = useWindowDimensions();
    const device = width < 768;
    const toggleCart = (item: any) => {
        if (!open){
            dispatch(updateCart(item, true));
        }
        animate();
    }
    const animate = () => {
        if (!open){
            dispatch(toggleMenu());
            Animated.timing(animateMenu.current, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false
            })
            .start();
        } else {
            Animated.timing(animateMenu.current, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
            })
            .start(()=>dispatch(toggleMenu()));
        }
    }
    const MENU_WIDTH = device ? width : width/2;
    const sideMenuBg = animateMenu.current.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(205, 209, 206, 0)', 'rgba(205, 209, 206, 0.8)']
    })
    const position = animateMenu.current.interpolate({
        inputRange: [0, 1],
        outputRange: [-(MENU_WIDTH), 0]
    })
    return (
        <View style={styles.dashboardContainer}>
            {
                open && 
                <Animated.View 
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: sideMenuBg,
                    zIndex: 999
                }}
                >
                    <Animated.View
                    style={{
                        width: MENU_WIDTH,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: position
                    }}
                    >
                        <SideMenu onClose={animate} />
                    </Animated.View>
                </Animated.View>
            }
            <Query query={PRODUCT_QUERY} variables={{ currency }} onCompleted={(data: any)=> dispatch(saveProducts(data.products))}>
                {(result: any) => {
                    const { loading, error, data } = result;
                    if (loading) return <h4>Loading ...</h4>
                    if (error) {
                        console.log(error)
                        return <h4>Error !!!</h4>
                    }
                    return (
                        <View style={styles.dashboardContainer}>
                            <HeaderAtom 
                            onCartPress={animate}
                            />
                            <ScrollView 
                            contentContainerStyle={{ flex: 1, backgroundColor: colors.bgColor }}
                            style={{ flex: 1, backgroundColor: colors.bgColor }}
                            >
                                <View style={[styles.dashboardSection, { paddingHorizontal: device ? 20 : 40 }]}>
                                    <View>
                                        <Text style={[styles.productHeaderText, { fontSize: device ? 32 : 42 }]}>All Products</Text>
                                        <Text style={[styles.productHeaderSubText, { fontSize: device ? 14 : 16 }]}>A 360° look at Lumin</Text>
                                    </View>
                                    <SelectAtom />
                                </View>
                                <View>
                                    <View style={{
                                        paddingHorizontal: device ? 10 : 20,
                                        flex: 1,
                                        flexDirection: 'row',
                                        flexWrap: 'wrap'
                                    }}>
                                        {
                                            data.products && data.products.length > 0 && data.products.map((item: any, key: number)=>{
                                                return (
                                                    <ListAtom 
                                                    key={key}
                                                    item={item}
                                                    onPress={()=>toggleCart(item)}
                                                    />
                                                )
                                            })
                                        }
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    )
                }}
            </Query>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1
    },
    dashboardSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
        height: 250,
        backgroundColor: colors.lighterBg,
        flexWrap: 'wrap',
    },
    productHeaderText: {
        fontFamily: 'Benne',
        fontSize: 42,
        color: colors.black
    },
    productHeaderSubText: {
        fontFamily: 'Bau',
        fontSize: 16,
        color: colors.black
    }
})
