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
        width: 30,
        height: 30,
        alignContent: 'center',
        alignItems: 'center',
        padding: 10

    },
    titletxt: {
        fontSize: 26,
        color: 'black',
        textAlign: 'justify',
        fontWeight: 'bold',
        padding: 5
    },
    titleContainer: {
        alignSelf: 'center',
        marginTop: 5,
        width: wp(95),
        height: hp(12),
    },
    subtitleContainer: {
        alignSelf: 'center',
        marginTop: 5,
        width: wp(95),
        height: hp(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    followtxt: {
        fontSize: 16,
        padding: 5
    },
    descriptionContainer: {
        alignSelf: 'center',
        marginTop: 5,
        width: wp(95),
        height: hp(15),
    },
    describeTxt: {
        fontSize: 18,
        color: 'black',
        padding: 5,
        textAlign:'justify',
    },
    linebox: {
        width: 5,
        height: 65,
        backgroundColor: '#434355',
        justifyContent:'center'
    },
    boxContainer: {
        marginTop: 5,
        flexDirection: 'row', 
        width: wp(95),
        height: 65, 
        backgroundColor: 'yellow', 
        alignSelf:'center',
    alignItems:'center',
    
    }

});

