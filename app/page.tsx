"use client";
import AppBar from "./components/AppBar";
import PageBody from "./components/PageBody";

export default function Home() {
  return (
    <div>
      <AppBar />
      <PageBody child={<Welcome />} />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      Hello there! We&apos;re still under construction, but come back soon and we might be ready.
    </div>
  )
}
