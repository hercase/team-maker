import { matchStore } from "store";

const CreateTeam = () => {
  const {
    location,
    setLocation,
    players,
    setPlayers,
    creator,
    setCreator,
    setMaxPlayers,
    max_players,
  } = matchStore();

  const [persistLocation, setPersistLocation] = useLocalStorage(
    "match-location",
    location
  );
  const [value, setValue] = useState("");
  const router = useRouter();

  const handlePaste = () => {
    navigator?.clipboard?.readText().then((clipText) => {
      handlePlayers(clipText);
    });
  };

  const CreateTeams = () => {
    const randomPlayers = shuffle(players);
    setPlayers(randomPlayers);
    setLocation(persistLocation);
    if (players) router.push("/list");
  };

  const handlePlayers = (players) => {
    setPlayers(players);
    setValue(players);
  };

  return <div>Test</div>;
};

export default CreateTeam;
