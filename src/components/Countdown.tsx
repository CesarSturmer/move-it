import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60 ;

  const [minuteLef, minutetRight] = String(minutes).padStart(2, '0').split('');
  const [secondLef, secondRight] = String(seconds).padStart(2, '0').split('');

  function StartCountdown() {
    setActive(true)
  }

  //
  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
    
  }, [active, time])

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

      <button 
        type="button" 
        className={styles.countdownButton}
        onClick={StartCountdown}
        >

        Iniciar um Ciclo
      </button>
    </div>
  )
}