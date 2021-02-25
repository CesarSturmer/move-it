import React from "react";
import Head from 'next/head'
import style from '../styles/pages/Home.module.css';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdowContext";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Início | Moviet</title>
      </Head>
      <ExperienceBar />
      
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>

    </div>

  );
}
