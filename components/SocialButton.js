import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {windowHeight,windowWidth} from '../utils/Dimentions'


const SocialButton = ({buttonTitle,color,backgroundColor, ...rest}) => {
    let bgColor=backgroundColor
    return (
        <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:bgColor}]} {...rest}>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText,{color:color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:'#2e64e5',
        padding:10,
        flexDirection:'row',
        borderRadius:3
    },
    iconWrapper:{
       width:30,
       justifyContent:'center',
       alignItems:'center'

    },
    icon:{
        fontWeight:'bold'
    },
    btnTxtWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold'
    }
})
