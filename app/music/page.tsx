"use client";
import "./page.scss";
import AppBar from "../components/AppBar";

export default function MusicPage() {
	return (
		<div>
			<AppBar />
			<Page />
		</div>
	)
}

function Page() {
	return (
		<div>
			Currently working on "Wild Mountain Thyme" on guitar, as seen in the movie Sinners.
		</div>
	)
}