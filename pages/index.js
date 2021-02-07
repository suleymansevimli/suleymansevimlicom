import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Süleyman Sevimli</title>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>

            <main className={styles.main}>

                <div className={styles.balloon1}/>
                <div className={styles.balloon2}/>
                <div className={styles.balloon3}/>
                <img className={styles.triangle} src={"/img/materials/triangle.png"} alt="triangle"/>

                <section className={styles.left}></section>

                <section className={styles.glass}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <h3>Süleyman Sevimli</h3>
                        </div>

                        <div className={styles.body}>

                        </div>

                        <div className={styles.footer}>
                            <footer>

                            </footer>
                        </div>

                    </div>
                </section>

                <section className={styles.right}></section>

            </main>
        </div>
    )
}

export default Home;