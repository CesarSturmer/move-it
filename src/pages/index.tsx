import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import Head from 'next/head'

import style from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Início | Moviet</title>
      </Head>  
      <ExperienceBar />

      <section>
        <div>
          <Profile />

          <CompletedChallenges />

          <Countdown />
        </div>
        
        <div>

        </div>
      </section>

    </div>

  );
}
