import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Technologies from "./components/Technologies/Technologies";
import { Suspense } from "react";
import type { techType } from "./types/techtype";


const techFetch = async () :Promise<techType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}


function App() {
  const techPromise = techFetch();
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies techPromise={techPromise} />
      </Suspense>



    </>
  )
}

export default App
