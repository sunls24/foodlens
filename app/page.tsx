import Title from "@/components/title";
import Actions from "@/components/actions";
import React from "react";
import Result from "@/components/result";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Title />
        <Actions />
        <Result />
      </div>
    </main>
  );
}
