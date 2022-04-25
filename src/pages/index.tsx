import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const {data, isLoading} = trpc.useQuery(["hello", {text: "Charles-Elie"}]);

  if (isLoading) return <div>Loading...</div>
 
  if (data) return <h1 className="text-3xl font-bold underline">{data.greeting}</h1>

  return <></>
};

export default Home;
