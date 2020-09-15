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
    back_arrowStyle: {
        width: 35,
        height: 35,
    },
    ProfileContainer: {
        backgroundColor: 'lightgray',
        width: wp(100),
        height: hp(32),
        justifyContent: 'center',
        alignItems: 'center',
    },
    ProfileImage: {
        width: 100,
        height: 100,
        borderRadius: 60,
        justifyContent: 'center',
        alignSelf: "center"
    },
    subtxt: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        padding: 5
    },
    logintxt: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        padding: 5
    },
    loginbtn: {
        width: wp(25),
        height: hp(5),
        marginTop: 4,
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        opacity: 0.7
    },
    Updatetxt: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        padding: 5
    },
    Updatebtn: {
        width: wp(35),
        height: hp(5),
        marginTop: 4,
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        opacity: 0.7
    },
   
    scrollcontainer: {
        zIndex: 1,
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -20

    },
    bodyContainer: {
        marginTop: hp(1),
        width: wp(90),
        justifyContent: 'center',
        alignSelf: 'center',
        height: hp(7),

    },
    listView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    listText:{
        fontSize: 18,

    }

});

