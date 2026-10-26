import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        padding: 20
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2c61b6',
        marginBottom: 10
    },
    descricao: {
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 26,
        color: '#555'
    }
});
