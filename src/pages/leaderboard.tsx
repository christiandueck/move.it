import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Leaderboard.module.css';
import React, { useContext } from 'react';
import { Sidebar } from '../components/Sidebar';
import { CardLeaderbox } from '../components/CardLeaderboard';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface LeaderboardProps {
    level: number,
    currentExperience: number,
    challengesCompleted: number
}

export default function Leaderboard(props: LeaderboardProps) {

    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Leaderboard | move.it</title>
                </Head>

                <Sidebar pageName='leaderboard' />
                <main className={styles.main}>

                    <header>


                        <h1 className={styles.titulo}>Leaderboard</h1>

                        <div className={styles.tableHeader}>
                            <span>
                                posição
                        </span>
                            <span>
                                usuário</span>
                            <span>
                                desafios</span>
                            <span>experiência</span>
                        </div>



                    </header>

                    <CardLeaderbox />
                </main>

            </div>
        </ChallengesProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level ?? 1),
            currentExperience: Number(currentExperience ?? 0),
            challengesCompleted: Number(challengesCompleted ?? 0)
        }
    }
}