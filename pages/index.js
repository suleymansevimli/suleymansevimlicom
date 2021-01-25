import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hello Magician !</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>

                <div className={styles.balloon1}/>
                <div className={styles.balloon2}/>
                <div className={styles.balloon3}/>

                <section className={styles.left}>

                </section>

                <section className={styles.glass}>

                </section>

                <section className={styles.right}>

                </section>
            </main>
        </div>
    )
}
