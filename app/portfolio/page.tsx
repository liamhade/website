"use client";
import "./page.scss";
import AppBar from "../components/AppBar";
import PageBody from "../components/PageBody";

export default function PortfolioPage() {
	return (
		<div>
			<AppBar />
			<PageBody child={<Page />} />
		</div>
	)
}

function Page() {
	return (
		<SimpleJarvisProject />
	)
}

function SimpleJarvisProject() {
	return (
		<div className="jarvis-project">
			<a className="title" target="_blank" href="https://github.com/liamhade/Simple-Jarvis">Simple Jarvis</a>
			<div className="spacer"> : </div>
			<div className="desc">
				A simple fullstack Windows application that connects the ChatGPT API to a QT Creator GUI .
			</div>
		</div>
	)
}