"use client";
import "./AppBar.scss";
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { routes } from "./routes";

// onHome lets the panel play its exit before leaving. Modified clicks (open in
// a new tab and so on) are left to the browser.
export default function AppBar({ onHome }: { onHome: () => void }) {
	const pathname = usePathname();

	function handleHome(e: React.MouseEvent) {
		if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		e.preventDefault();
		onHome();
	}

	return (
		<nav className="appBar">
			{[{ label: "Home", href: "/" }, ...routes].map((route) => (
				<Link
					className={`appBar-link ${pathname === route.href ? "appBar-link--active" : ""}`}
					href={route.href}
					key={route.href}
					aria-current={pathname === route.href ? "page" : undefined}
					onClick={route.href === "/" ? handleHome : undefined}
				>
					{route.label}
				</Link>
			))}
		</nav>
	)
}
