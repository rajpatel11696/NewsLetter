import { StyleSheet } from "react-native"
import { wp, hp } from '../../commons/utility/Dimension'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        color: 'black',
    },
    dark_icon: {
        width: 30,
        height: 30,
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        marginTop: hp(7),
        width: wp(90),
        height: hp(60),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'

    },
});

