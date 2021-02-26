import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {

  const {level, CloseLevelUpMOdal} = useContext(ChallengeContext);
  return (

    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>PARABÉNS</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={CloseLevelUpMOdal}>
          <img src="icons/close.svg" alt="fechar modal"/>
        </button>
      </div>
    </div>

  )
}