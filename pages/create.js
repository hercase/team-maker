import Button from "components/atoms/Button";
import DatePicker from "components/atoms/DatePicker";
import Feedback from "components/templates/Feedback";
import Layout from "components/templates/Layout";
import useLocalStorage from "hooks/useLocalStorage";
import { shuffle } from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import { matchStore } from "store";
import Input from "components/atoms/Input";
import ToggleSwitch from "components/atoms/ToggleSwitch";
import styled from "styled-components";

const Create = () => {
  const { location, setLocation, players, setPlayers, creator, random, setRandom } = matchStore();

  const [persistLocation, setPersistLocation] = useLocalStorage("match-location", location);
  const [persistCreator, setPersistCreator] = useLocalStorage("creator", creator);
  const [value, setValue] = useState("");
  const router = useRouter();

  const handlePaste = () => {
    // eslint-disable-next-line no-unused-expressions
    navigator?.clipboard.readText().then((clipText) => {
      handlePlayers(clipText);
    });
  };

  const CreateTeams = () => {
    const playersList = random ? shuffle(players) : players;

    setPlayers(playersList);
    setLocation(persistLocation);
    if (players) router.push("/list");
  };

  const handlePlayers = (players) => {
    setPlayers(players);
    setValue(players);
  };

  return (
    <Layout>
      <div className="flex flex-col p-5 gap-3 max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col flex-auto w-full relative" style={{ maxHeight: "400px" }}>
          <textarea
            className="p-4 w-full flex-1 rounded-md resize-none"
            onChange={(e) => handlePlayers(e.target.value)}
            value={value}
            placeholder={`1. Pedro\n2. Flor\n3. Juan \n4. Sylvie\n5. Chloe ...`}
          />
          <div className="flex gap-x-2 absolute bottom-5 right-5">
            <Button variant="secondary">{players.length}</Button>
            <Button onClick={() => handlePaste()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </Button>
          </div>
        </div>
        <p className="text-white font-sans">Datos del partido</p>
        <StyledForm>
          <Input label="Lugar" value={persistLocation} onChange={(e) => setPersistLocation(e.target.value)} />
          <Input label="Creador" value={persistCreator} onChange={(e) => setPersistCreator(e.target.value)} />
          <div className="date-picker">
            <DatePicker />
            <div className="flex flex-col">
              <span className="block text-sm font-medium text-gray-700 mb-2">Aleatorio</span>
              <div className="flex h-full">
                <ToggleSwitch
                  title="Crear lista de manera aleatoria"
                  size="sm"
                  value={random}
                  checked={random}
                  onChange={() => {
                    setRandom(!random);
                    handlePlayers(value);
                  }}
                />
              </div>
            </div>
          </div>
        </StyledForm>

        <div className="flex justify-center w-full">
          <Button disabled={players.length > 1 ? false : true} type="submit" onClick={() => CreateTeams()}>
            Crear equipos
          </Button>
        </div>
      </div>
      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  & .date-picker {
    display: flex;
    gap: 0.5rem;
    grid-column: 1 / -1;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Create;
