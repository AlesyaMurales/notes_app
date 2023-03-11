import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({ 


    notesContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 70,
        height: '100%'
    },

    notesHeading: {
        fontSize: 30,
        fontWeight: '500',
        color: '#07689F',
    },

    notesDivider: {
        width: '100%',
        height: 2,
        backgroundColor: '#07689F',
        marginTop: 15,
        marginBottom: 15
    },

    notesItem: {
        marginBottom: 20,
        padding: 15,
        color: 'black',
        opacity: 0.8,
        marginTop: 10,
        shadowColor: '#07689F',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: '#07689F',
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth: 15
    },

    notesIndex: {
        fontSize: 20,
        fontWeight: '800'
    },

    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    notesButton: {
        backgroundColor: '#07689F',
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        height: 50
    },

    notesButtonText: {
        color: 'white',
        fontSize: 32,
        fontWeight: '800',
    },

    notesScrollView: {
        marginBottom: 70
    },

    note: {
        flexDirection: 'row',
        width: '75%'
    },

    notesText: {
        fontWeight: '700',
        fontSize: 20,
        
    },

    notesDelete: {
        color: '#07689F',
        fontWeight: '700',
        fontSize: 15
    },

    notesInput: {
        height: 40,
        paddingHorizontal: 20,
        width: '65%',
        fontSize: 19,
        color: "black",
        fontWeight: '600',
        shadowColor: '#3F72AF',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: '#07689F',
        borderWidth: 2,
        borderRadius: 5
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,

    },

    SearchButton: {
        backgroundColor: '#07689F',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        borderRadius: 5,
        height: 40,
        marginLeft: 8
    },

    SearchButtonText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 17
    },

    emptyNoteContainer: {
        alignItems: 'center',
        marginTop: 240
    },

    emptyNoteText: {
        color: '#3F72AF',
        fontWeight: '600',
        fontSize: 15
    },

    dateContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    addNoteContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    addNoteInput: {
        padding: 20,
        paddingTop: 20,
        width: '100%',
        fontSize: 19,
        color: "black",
        fontWeight: '600',
        opacity: 0.8,
        shadowColor: '#3F72AF',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: '#07689F',
        borderWidth: 2,
        borderRadius: 5,
        height: 300,
    },

    addNoteButton: {
        backgroundColor: '#07689F',
        width: '40%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height: 40,
        alignSelf: 'flex-end'
    },

    addNoteButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },

    emptyButton: {
        backgroundColor: '#07689F',
        width: '25%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        height: 35,
    },

    emptyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    }

});


