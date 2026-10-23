"use client";
import "./Scene.scss";
import React from "react";
import { Fira_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { routes } from "./routes";

// TODO: swap in the real profile URLs.
const LINKEDIN_URL = "https://www.linkedin.com/in/liam-hade-516403209/";
const GITHUB_URL = "https://github.com/liamhade/liamhade";

// Fira Sans is Erik Spiekermann's open take on FF Meta.
const firaSans = Fira_Sans({
	subsets: ["latin"],
	weight: ["400", "500"],
});

const socials = [
	{ label: "LinkedIn", href: LINKEDIN_URL, icon: "/hero/linkedin.webp" },
	{ label: "GitHub", href: GITHUB_URL, icon: "/hero/github.webp" },
];

// The sky, clouds and landscape behind every page. It lives in the root layout
// so it stays mounted between routes: on the home page it's the hero, and on
// any other page the clouds slide right and the land slides left to make room
// for the page's glass panel (rendered by PageBody as `children`).
export default function Scene({ children }: { children: React.ReactNode }) {
	const isHome = usePathname() === "/";

	return (
		<main className={`hero ${isHome ? "" : "hero--page"} ${firaSans.className}`}>
			<div className="hero-theme-toggle">
				<ThemeToggle />
			</div>

			<div className="hero-clouds">
				{socials.map((social) => (
					<div className="hero-cloud" key={social.label}>
						<Image className="hero-cloud-img" src="/hero/cloud.webp" alt="" width={900} height={491} priority />
						<a className="hero-social" href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}>
							<Image src={social.icon} alt="" width={160} height={160} />
						</a>
					</div>
				))}
			</div>

			{/* The hills live inside the landscape's box so they scale with it and stay tucked behind its skyline. */}
			<div className="hero-ground">
				<nav className="hero-hills">
					{routes.map((route) => (
						<Link className="hero-hill" href={route.href} key={route.href}>
							<span className="hero-hill-label">{route.label}</span>
							<Image className="hero-hill-img" src="/hero/hill.webp" alt="" width={900} height={177} priority />
						</Link>
					))}
				</nav>

				{/* Drawn last so its crests cover the bottoms of the hills. */}
				<Image className="hero-landscape" src="/hero/landscape.webp" alt="" width={2000} height={793} priority />
			</div>

			{children}
		</main>
	);
}
