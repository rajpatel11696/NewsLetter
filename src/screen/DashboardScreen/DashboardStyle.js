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
    searchContainer: {
        width: wp(90),
        height: hp(5.7),
        backgroundColor: 'gray',
        opacity: 0.5,
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 25,
        flexDirection: 'row',
        marginTop: hp(4)

    },
    search_icon: {
        width: 22,
        height: 22,
        marginLeft: 25
    },
    searchtxt:{
        fontSize: 18,
        color:'black',
        marginLeft: 12
    }

});

