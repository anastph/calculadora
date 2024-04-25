import React from "react";
import {Dimensions, StyleSheet, Text, TouchableHighlight} from "react-native";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,  //paga o tamanho da tela e divide por 4 para colcar em um elemento
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888888'
    },
    operationButton: {  //destacar o botão dos outros elementos
        color: '#ffffff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
})

export default props => {
    const StylesButton = [styles.button]
    if (props.double) StylesButton.push(styles.buttonDouble)
    if (props.triple) StylesButton.push(styles.buttonTriple)
    if (props.operation) StylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={StylesButton}>{props.label}</Text>
        </TouchableHighlight>
        

    )
}