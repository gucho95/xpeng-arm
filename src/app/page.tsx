import { AnimatedButton, AnimatedButtonVariant } from "@/components/Button";

import Header from "@/components/Header";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="min-h-screen bg-red-200"></main>
    </Fragment>
  );
}
