import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import heroImg from '../../public/assets/hero.png';


export default function Home() {
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
            </main>
        </>
    );
}
