"use client";
import { ThemeContext } from "@/util/ThemeContext";
import React, { useContext } from "react";
const HomePageContainer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className="page-grid">
      <div className={`${theme} card-vertical bg-red-400`}>box</div>
      <div className={`${theme} card-two-by-two`}>box</div>
      <div className={`${theme} card-vertical`}>box</div>
      <div className={`${theme} card-one-by-one`}>box</div>
      <div className={`${theme} card-full-horizontal`}>box</div>
      <div>box</div>
      <div>box</div>
      <div>box</div>
      <div>box</div>
      <div>box</div>
      <div>box</div>
      <div>box</div>
    </main>
  );
};

export default HomePageContainer;
