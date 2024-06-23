import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal: Animal ) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus
  ];
}


//withouth "as"TS assumes itcould be any of the elements inside Animal:
//hover over useBreedList gives this: function useBreedList(animal: Animal): (string[] | "error" | "success" | "loading")[]