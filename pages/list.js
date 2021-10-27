import Alert from "components/atoms/Alert";
import Button from "components/atoms/Button";
import CheckIcon from "components/atoms/Icons/CheckIcon";
import Logo from "components/atoms/Logo";
import PlayersList from "components/molecules/PlayersList";
import Feedback from "components/templates/Feedback";
import Layout from "components/templates/Layout";
import { format } from "date-fns";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { AnimateSharedLayout, motion } from "framer-motion";
import { dataURLtoFile } from "helpers";
import html2canvas from "html2canvas";
import { shuffle } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "services/firebase";
import { matchStore } from "store";
import styled from "styled-components";
import { es } from "date-fns/locale";

const ListTeam = () => {
  const db = getFirestore(app);
  const content = useRef();
  const router = useRouter();
  const { players, date, location, creator } = matchStore();
  const [names, setNames] = useState(players);

  const [shuffling, setShuffling] = useState(true);

  const half = Math.ceil(players?.length / 2);

  const firstHalf = names?.slice(0, half);
  const secondHalf = names?.slice(-half);

  useEffect(() => {
    if (players.length === 0) {
      router.push("/create");
    }
  }, [router, players.length]);

  useEffect(() => {
    if (shuffling) setTimeout(() => setNames(shuffle(names)), 500);
  }, [names, shuffling]);

  useEffect(() => {
    setTimeout(() => setShuffling(false), 1500);
  }, []);

  useEffect(() => {
    toast("Mezclando 🎲");
  }, []);

  const variants = {
    idle: {
      x: 0,
      rotate: [-0.5, 0.5, -0.4, 0.4, -0.2, 0.2, 0],
      transition: { type: "spring" },
    },
    shuffling: {
      x: [0.2, -0.2],
      rotate: [0.5, -0.5],
      transition: {
        flip: Infinity,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const generateShareImage = async (component, matchURL) => {
    const canvas = await html2canvas(component, {
      allowTaint: true,
      removeContainer: true,
      backgroundColor: "#171f6d",
      height: component.offsetHeight + 70,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: -50,
      windowWidth: 650,
      width: 666,
      scale: 1,

      onclone: (clone) => {
        const content = clone.querySelector(".screenshot");

        content.classList.add("shared");

        const logo = (
          <div className="header">
            <Logo width={200} dark />
          </div>
        );
        const stringComponent = renderToString(logo);

        return content.insertAdjacentHTML("afterbegin", stringComponent);
      },
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.6);
    const file = dataURLtoFile(imgData, "photo.jpg");

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Team Maker",
          text: "Compartido desde Team Maker",
          url: matchURL,
          files: [file],
        });
      }
    } catch (e) {
      console.log("Error sharing list.");
    }
  };

  const handleShare = async () => {
    const create = await addDoc(collection(db, "matches"), {
      admin: creator,
      date: date,
      location: location,
      max_players: players.length,
      teams: { A: firstHalf, B: secondHalf },
    });

    if (create.id) {
      let matchURL = `/match/${create.id}`;
      generateShareImage(content.current, matchURL);
      history.push({ pathname: matchURL });
    }
  };

  return (
    <Layout>
      <StyledList className="flex flex-col">
        <div className="screenshot flex flex-col gap-5 p-4" ref={content}>
          <div className="col-span-1 flex shadow-sm rounded-md w-full mx-auto">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
              <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <p className="text-gray-900 font-medium hover:text-gray-600">{location}</p>
                <p className="text-gray-500 capitalize">{format(date, "EEEE dd/MM - p", { locale: es })} hs </p>
                <p className="text-gray-500">{players?.length} Jugadores</p>
              </div>
            </div>
          </div>

          <AnimateSharedLayout>
            <motion.div
              initial="idle"
              animate={shuffling ? "shuffling" : "idle"}
              variants={variants}
              style={{ minHeight: "100px" }}
              className="relative flex justify-center mb-5 text-center gap-3"
            >
              <PlayersList players={firstHalf} color="#FFFFFF" />
              <div className="z-10 absolute bottom-3">
                <Image alt="Versus icon" src="/img/versus.svg" width={45} height={45} />
              </div>
              <PlayersList players={secondHalf} color="#2C3590" />
            </motion.div>
          </AnimateSharedLayout>
          <Alert text="La posición de los jugadores no determina el orden en que atajan." />
        </div>
        <div className="flex justify-center items-center">
          <Button onClick={handleShare} disabled={shuffling}>
            <div className="flex gap-4 w-full justify-center items-center px-6">
              <span>Listo</span>
              <CheckIcon className="w-4 h-4" />
            </div>
          </Button>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </StyledList>
      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

const StyledList = styled.div`
  .shared {
    width: 650px;
    height: min-content;

    & .header {
      display: flex;
      justify-content: center;
    }
  }
  /** Classes for the progress bar **/
  .Toastify__progress-bar.Toastify__progress-bar--default {
    background: #2c3590;
  }
`;

export default ListTeam;
