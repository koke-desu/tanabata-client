import { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { StripType } from "./types";
import awsExports from "../aws-exports";
import { listTodos } from "../graphql/queries";

Amplify.configure(awsExports);

export const useGetStrips = () => {
  const [strips, setStrips] = useState<StripType[] | undefined>(undefined);

  useEffect(() => {
    fetchStrips().then((res) => {
      setStrips(res);
    });
  }, []);

  return strips;
};

const fetchStrips = async (): Promise<StripType[] | undefined> => {
  try {
    const stripData = await API.graphql<any>(graphqlOperation(listTodos));
    const strips = stripData.data.listTodos.items;
    return strips;
  } catch (err) {
    console.log("error fetching strips");
    return undefined;
  }
};
