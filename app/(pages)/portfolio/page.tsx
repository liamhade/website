"use client";
import "./page.scss";

const projects = [
	{
		title: "Simple Jarvis",
		href: "https://github.com/liamhade/Simple-Jarvis",
		desc: "A simple fullstack Windows application that connects the ChatGPT API to a QT Creator GUI .",
	},
	{
		title: "PokerBot",
		href: "https://github.com/liamhade/PokerBot",
		desc: "A project for learning C++ by building a playable poker engine, with some exploration of Monte Carlo simulation along the way.",
	},
];

export default function PortfolioPage() {
	return (
		<Page />
	)
}

function Page() {
	return (
		<div>
			{projects.map((project) => (
				<Project {...project} key={project.href} />
			))}
		</div>
	)
}

function Project({ title, href, desc }: { title: string, href: string, desc: string }) {
	return (
		<div className="project">
			<a className="title" target="_blank" href={href}>{title}</a>
			<div className="spacer"> : </div>
			<div className="desc">
				{desc}
			</div>
		</div>
	)
}
