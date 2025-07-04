"use client";
import "./AppBar.scss";
import Link from 'next/link';

export default function AppBar() {
	return (
		<nav className="appBar">
			<Link className="appBar-link" href="/">Home</Link>
			<Link className="appBar-link" href="/poetry">Poetry</Link>
		</nav>			
	)
}