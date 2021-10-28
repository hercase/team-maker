import PropTypes from "prop-types";
import { useRef } from "react";
import Image from "next/image";
import { StyledMatch } from "./match.styled";
import Head from "next/head";

// Services
import { getMatchById } from "services/firestore";

// Components
import Button from "components/atoms/Button";
import Layout from "components/templates/Layout";
import ShareIcon from "components/atoms/Icons/ShareIcon";
import Feedback from "components/templates/Feedback";
import LoadingIcon from "components/atoms/Icons/LoadingIcon";
import PlayersList from "components/molecules/PlayersList";
import { convertTimestampToDate } from "helpers";

const Match = ({ match }) => {
  const content = useRef();
  const exists = match !== null;

  const handleShare = () => {};

  // Constants
  const totalPlayers = match.teams.A?.length + match.teams.B.length;

  return (
    <Layout>
      <Head>
        <title>{match.location} - Team Maker</title>
        <meta property="og:title" content={`${match.location} - Team Maker`} key="title" />
      </Head>
      {match ? (
        <StyledMatch>
          <div className="content screenshot" ref={content}>
            <div className="header">
              <div className="icon">
                <svg
                  width={30}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="data">
                <p className="title">{match.location}</p>
                <p className="text-gray-500 capitalize">{match.date}</p>
                <p className="text-gray-500">
                  creado por <span className="subtitle">{match.admin}</span>
                </p>
                <p className="text-gray-500">
                  {totalPlayers} / {match?.max_players} Jugadores
                </p>
              </div>
            </div>

            <div style={{ minHeight: "100px" }} className="relative flex justify-center mb-5 text-center gap-3">
              <PlayersList players={match?.teams.A} color="#FFFFFF" />
              <div className="z-10 absolute bottom-3">
                <Image alt="Versus icon" src="/img/versus.svg" width={45} height={45} />
              </div>
              <PlayersList players={match?.teams.B} color="#2C3590" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button onClick={handleShare} disabled={!match}>
              <div className="flex gap-4 w-full justify-center items-center px-6">
                <span>Compartir</span>
                <ShareIcon className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </StyledMatch>
      ) : exists === false ? (
        <div className="not-found">
          <p>No se encontro información...</p>
          <Button onClick={() => history.push("/create")}>Ir al inicio</Button>
        </div>
      ) : (
        <LoadingIcon />
      )}

      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

Match.propTypes = {
  match: PropTypes.any,
};

export async function getServerSideProps({ params }) {
  const match = await getMatchById(params.id);

  const formatedMatch = { ...match, date: convertTimestampToDate(match.date) };

  return {
    props: {
      match: formatedMatch,
    }, // will be passed to the page component as props
  };
}

export default Match;
