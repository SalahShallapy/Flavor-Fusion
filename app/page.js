import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/images-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Flavor Fusion Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community !</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Flavor Fusion Food is a dynamic community-driven platform where food
            enthusiasts can share their cherished recipes with the world.
            Discover a treasure trove of unique dishes contributed by passionate
            cooks and learn how to create culinary masterpieces in your own
            kitchen.
          </p>
          <p>
            Explore recipes from every corner of the globe, connect with fellow
            food lovers, and share your own creations to inspire others.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Flavor Fusion Food?</h2>
          <p>
            Flavor Fusion Food is not just a recipe-sharing site—it&#39;s a
            vibrant community where food unites people. Whether you are looking
            to discover new dishes, improve your cooking skills, or simply
            connect with like-minded individuals, this platform offers endless
            opportunities.
          </p>
          <p>
            Join to participate in exclusive cooking events, find inspiration
            for your next meal, and leave your mark by sharing recipes that
            reflect your unique taste and creativity
          </p>
        </section>
      </main>
    </>
  );
}
