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
import PlayersList from "components/molecules/PlayersList";
import { convertTimestampToDate, upperFirst } from "helpers";

const Match = ({ match }) => {
  const SEO = {
    title: `${upperFirst(match.location)} - Team Maker`,
    text: `${match.location} - ${upperFirst(
      match.date
    )} | Creado con Team Maker! Vos tambien podes crear equipos rápidamente y compartilos de con tus amigos!`,
    url: match.url,
  };

  const handleShare = async () => {
    await navigator.share(SEO);
  };

  // Constants
  const totalPlayers = match.teams.A?.length + match.teams.B.length;

  return (
    <Layout>
      <Head>
        <title>{SEO.title}</title>
        <meta property="og:title" content={SEO.title} key="title" />
        <meta name="description" content={SEO.text} />
        <meta property="og:image" content="/img/maskable_logo.png" />
        <meta property="og:url" content={SEO.url} />
      </Head>

      <StyledMatch>
        <div className="content screenshot">
          <div className="header">
            <div className="icon">
              <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                creado por <span className="text-primary">{match.admin}</span>
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

      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

Match.propTypes = {
  match: PropTypes.any,
};

export async function getServerSideProps({ req, params }) {
  const match = await getMatchById(params.id);

  if (!match) {
    return {
      notFound: true,
    };
  }

  const formattedMatch = {
    ...match,
    url: `https://${req.headers.host}/match/${params.id}`,
    date: convertTimestampToDate(match.date),
  };

  return {
    props: {
      match: formattedMatch,
    },
  };
}

export default Match;
