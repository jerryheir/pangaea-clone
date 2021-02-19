import { useRef, useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { colors } from '../Styles/Colors';

const SelectAtom = ({ onChange, value, items }: any) => {
    const selected: any = useRef(null);
    const [focused, setFocus] = useState(false);
    const { width } = useWindowDimensions();
    const device = width < 768;
    return (
        <View style={{
            width: device ? width - 40 : 400,
            height: 57,
            borderColor: focused ? colors.black : colors.lighterGreen,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white
        }}>
            <select
            ref={selected}
            onFocus={()=> setFocus(true)}
            onBlur={()=> setFocus(false)}
            style={{ 
                display: 'flex',
                width: device ? width - 70 : 370,
                height: 47,
                borderWidth: 0,
                backgroundColor: colors.white,
                fontFamily: 'Bau',
                fontSize: 16
            }}
            onChange={onChange}
            value={value}
            >
            <option value="">{"Filter By"}</option>
            {items && items.length > 0 && items.map((item: any, key: number) => {
                return (
                <option value={item.value} key={key}>
                    {item.name}
                </option>
                );
            })}
            </select>
        </View>
    )
}

export default SelectAtom;
