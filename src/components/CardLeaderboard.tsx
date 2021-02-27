import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CardLeaderbox.module.css';

export function CardLeaderbox() {
    const {
        level,
        challengesCompleted,
        currentExperience
    } = useContext(ChallengesContext)

    return (
        <div className={styles.card}>
            <div className={styles.position}>
                1
            </div>
            <div className={styles.userData}>

                <div className={styles.profileContainer}>
                    <img src="https://github.com/christiandueck.png" alt="Christian Dueck" />
                    <div>
                        <strong>Christian Dueck</strong>
                        <p>
                            <img src="icons/level.svg" alt="Level" />
                            Level {level}
                        </p>
                    </div>
                </div>
                <div>
                    <span>{challengesCompleted}</span> completados
                </div>
                <div>
                    <span>{currentExperience}</span> xp
                </div>
            </div>
        </div>
    );
}