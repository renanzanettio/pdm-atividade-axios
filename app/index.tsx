import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/global';
import axios from 'axios';

type Post = {
    title: string;
    body: string;
};

export default function Home() {
    const [post, setPost] = useState<Post | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregar() {
            try {
                const res = await axios.get<Post>(
                    'https://jsonplaceholder.typicode.com/posts/1'
                );
                setPost(res.data);
            } catch (erro) {
                setErro(true);
            } finally {
                setCarregando(false);
            }
        }

        carregar();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {carregando ? (
                    <Text>Carregando dados...</Text>
                ) : erro ? (
                    <Text>Não foi possível carregar os dados.</Text>
                ) : (
                    <View>
                        <Text style={styles.titulo}>{post?.title}</Text>
                        <Text style={styles.descricao}>{post?.body}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}
