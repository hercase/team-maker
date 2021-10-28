import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { subscribeByMatchId } from "services/firestore";

const useMatch = (id) => {
  const router = useRouter();
  const [exist, setExists] = useState(null);
  const [match, setMatch] = useState();

  useEffect(() => {
    const subscription = subscribeByMatchId(id, setMatch);

    subscription.then((matchExist) => {
      setExists(matchExist);
    });
  }, [router, id]);

  return [match, exist];
};

export default useMatch;
