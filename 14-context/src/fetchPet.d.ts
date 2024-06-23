import { PetAPIResponse } from "./APIResponsesTypes";

declare module "./fetchPet" {
  const fetchPet: import("@tanstack/react-query").QueryFunction<PetAPIResponse, ["details", string]>;
  export default fetchPet;
}
