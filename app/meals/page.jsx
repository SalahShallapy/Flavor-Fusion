import Link from "next/link";
import { Suspense } from "react";

import classes from "./page.module.css";
import MelasGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browse all meals created by our community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MelasGrid meals={meals} />;
}

export default async function MelasPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
          <p>
            Choose your own recipe and try cooking it, it&apos;s gonna be fun !
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">Share your favorite recipe</Link>
          </p>
        </h1>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
