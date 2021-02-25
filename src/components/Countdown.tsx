import { useContext } from 'react';
import { CountdowContext } from '../contexts/CountdowContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {

  const { 
    minutes, 
    seconds, 
    isActive, 
    StartCountdown,
    hasFinished, 
    FinishCountdown } = useContext(CountdowContext);

  const [minuteLef, minutetRight] = String(minutes).padStart(2, '0').split('');
  const [secondLef, secondRight] = String(seconds).padStart(2, '0').split('');


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
          <img src="icons/check.svg" alt="ciclo finalizado" className={styles.playCountdownImage} />
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