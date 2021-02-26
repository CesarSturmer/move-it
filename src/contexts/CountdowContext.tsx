import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";


interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  StartCountdown: () => void;
  FinishCountdown: () => void;

}
interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdowContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {


  const { StartNewChallenge } = useContext(ChallengeContext);


  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function StartCountdown() {
    setIsActive(true)
  }

  function FinishCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60);
    setHasFinished(false)

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
    <CountdowContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      StartCountdown,
      FinishCountdown,
    }}>
      {children}
    </CountdowContext.Provider>
  )
}
