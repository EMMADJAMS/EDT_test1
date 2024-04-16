import NavBar from "@/components/NavBar";
import Image from "next/image";
import { NavLink1 } from "../constant";
import Testy from "@/components/Testy";

export default function Home() {
  return (
    <main className="w-full flex">
      <Testy navLink={NavLink1}/>
    </main>
  );
}
