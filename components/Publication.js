// import { } from "react-native/types";
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function Publication({ id, description, available, modal}) {

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10
            }}>
            {/* <Text>asdd</Text> */}
            <View style={{
                width: 270
            }}>
                <Text
                    style={{
                        color: 'white'
                    }}
                >{description}</Text>
            </View>
            <View>
                <Button
                    onPress={()=>modal(id)}
                    disabled={!available}
                    title={'Conheça'}
                />
            </View>
        </View>
    )
}