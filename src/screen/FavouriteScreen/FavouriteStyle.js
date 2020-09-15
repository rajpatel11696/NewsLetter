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
    subcontainer: {
        flexDirection: 'row',
        width: wp(90),
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: hp(4),
        alignItems: 'center'
    },
    txtcontain: {
        fontSize: 24,
    },
    chevron_icon: {
        width: 17,
        height: 17,
    },

    boxmain: {

        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: hp(3),
        justifyContent: "space-between",
        width: wp(90)

    },
    boxcontainer: {
        width: wp(28),
        height: hp(18),
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 65,
        height: 65,
        borderRadius: 35
    },
    headlinetxt: {
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
        padding: 3
    },
    followbox: {
        marginTop: 6,
        width: 88,
        height: 25,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth: 1
    },
    followtxt:{
        color:'black',
    },

});

