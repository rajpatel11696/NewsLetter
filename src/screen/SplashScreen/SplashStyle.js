import { StyleSheet } from "react-native"
import { wp } from "../../commons/utility/Dimension";

export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gold'
    },
    title: {
        marginTop: -15,
        fontSize: 54,
        textAlign: 'center',
        color: 'white',
        fontWeight:'bold'
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        fontWeight:'bold'

    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: wp(65),
        paddingTop: 10
    },
});