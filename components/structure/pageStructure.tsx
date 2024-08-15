"use client";
import React, { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

interface PageStructure {
  children: ReactNode;
}

export default function PageStructure({ children }: PageStructure) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
