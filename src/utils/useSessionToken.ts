import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useSessionToken = () => {
  const { getToken } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token);
    };
    fetchToken();
  }, [getToken]);

  return token;
};

export default useSessionToken;
