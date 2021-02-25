import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdowContext } from '../contexts/CountdowContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);

  const { FinishCountdown } = useContext(CountdowContext);
  
  function handleChallengeSucceeded(){
    completeChallenge()
    FinishCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    FinishCountdown()
  }


  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header> Ganhe {activeChallenge.amount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>

            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>

          </footer>
        </div>
      ) : (

          <div className={styles.challengeNotActive}>
            <strong> Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="level up" />
            Avance de level completando desafios.
          </p>
          </div>
        )}

    </div>
  )
}