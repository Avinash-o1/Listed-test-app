"use client";
import { RightBoard } from "@/Component";

export default function Home() {
  // window.alert("dummy-gmail-acc : johndoe152368@gmail.com pass: john123doe next-pageurl: /dashboard");
  return (
    <div className="boss-cont">
      <main className="bg-white flex w-full">
        <div className="bg-black w-2/5 h-screen flex justify-center items-center">
          <h2 className=" boss-head font-sans font-bold text-white">
            Board.
          </h2>
        </div>
        <div className="shrink-0 right-0 w-3/5 bg-[#F5F5F5] h-screen flex">
          <RightBoard />
        </div>
      </main>
    </div>
  );
}
