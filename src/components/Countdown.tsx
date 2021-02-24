import { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  const { StartNewChallenge } = useContext(ChallengeContext);


  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;


  const [minuteLef, minutetRight] = String(minutes).padStart(2, '0').split('');
  const [secondLef, secondRight] = String(seconds).padStart(2, '0').split('');

  function StartCountdown() {
    setIsActive(true)
  }

  function FinishCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60);

  }

  //e quanto o time mudar e o active ele fica atualizando o hook
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      StartNewChallenge();
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLef}</span>
          <span>{minutetRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLef}</span>
          <span>{secondRight}</span>
        </div>
      </div>


      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}

        >
          Ciclo Encerrado
          <img src="icons/check.svg" alt="ciclo finalizado" className={styles.playCountdownImage}/>
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={FinishCountdown}
              >
                Abandonar Ciclo
                <img src="icons/close.svg" alt="abandonar ciclo" className={styles.playCountdownImage} />

              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={StartCountdown}
                >
                  Iniciar um Ciclo
                  <img src="icons/play.svg" alt="iniciar ciclo" className={styles.playCountdownImage} />
                </button>
              )
            }
          </>
        )}
    </div>


  )
}