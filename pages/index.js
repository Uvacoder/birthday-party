import Head from "next/head";
import Countdown from "react-countdown";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const end = new Date(2021, 4, 19);

  const [enter, setEnter] = useState(false);

  const entered = () => {
    setEnter(true);
    const audio = new Audio("/audio.mp3");
    audio.play();
  };

  const MainContent = () =>
    enter ? (
      <div className="flex flex-col items-center justify-center p-8">
        <span className="text-4xl md:text-6xl mb-20 font-bold text-center animation-blink">
          Herzlichen Glückwunsch zum Geburtstag, Alex!
        </span>
        <div className="flex justify-center items-center mb-20">
          <Image src="/Ullis_Logo.png" width={169} height={164}></Image>
          <span className="text-7xl md:text-9xl font-light px-8 md:px-16">
            ×
          </span>
          <Image src="/otto.jpg" width={149} height={164}></Image>
        </div>
        <p className="text-center text-3xl md:text-4xl w-full max-w-4xl">
          Ullis Welt lädt dich in Kooperation mit Otto Gourmet zu einer
          exklusiven Steakverkostung ein
        </p>
      </div>
    ) : (
      <button
        type="button"
        onClick={() => entered()}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enter
      </button>
    );

  const renderer = ({ formatted: { hours, minutes, seconds }, completed }) =>
    completed ? (
      <MainContent></MainContent>
    ) : (
      <span className="text-7xl md:text-9xl font-bold">
        {hours}:{minutes}:{seconds}
      </span>
    );

  return (
    <div>
      <Head>
        <title>Alex Geburtstag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full flex flex-col justify-center items-center">
        <Countdown
          date={end}
          daysInHours={true}
          renderer={renderer}
        ></Countdown>
      </main>
    </div>
  );
}
