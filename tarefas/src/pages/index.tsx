import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import heroImg from '../../public/assets/hero.png';
import { GetStaticProps } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

interface HomeProps {
    posts: number;
    comments: number;
}
export default function Home({ posts, comments}:HomeProps) {
    return (
        <>
            <Head>
                <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.logoContent}>
                    <Image 
                        src={heroImg} 
                        alt="logo + "  
                        className={styles.hero}
                        priority={true}
                    />
                </div>
                <h1 className={styles.title}>
                    Sistema feito para você organizar<br />
                    seus estudos e tarefas
                </h1>
                <div className={styles.infoContent}>
                    <section className={styles.box}>
                        <span>+{posts} Posts</span>
                    </section>
                    <section className={styles.box}>
                        <span>+{comments} Comentários</span>
                    </section>
                </div>
            </main>
        </>
    );
}



export const getStaticProps: GetStaticProps = async () => {
    const commentRef = collection(db, "comments");
    const commentSnapshot = await getDocs(commentRef);

    const postRef = collection(db, "tarefas");
    const postSnapshot = await getDocs(postRef);

    return {
        props: {
            posts: postSnapshot.size || 0,
            comments: commentSnapshot.size || 0
        },
        revalidate: 60 //Revalidado a cada 60 sec
    }
}