import NavBar from "@/components/NavBar";
import Image from "next/image";
import { NavLink1 } from "../constant";
import Testy from "@/components/Testy";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="w-full flex">
      <UserButton afterSignOutUrl='/'/>
    </main>
  );
}
