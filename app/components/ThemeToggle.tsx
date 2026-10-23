"use client";
import "./ThemeToggle.scss";

// Both icons are always rendered and CSS shows the right one, so the
// server and client markup match no matter which theme is active.
export default function ThemeToggle() {
	function toggle() {
		const root = document.documentElement;
		const current = root.dataset.theme
			?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		const next = current === "dark" ? "light" : "dark";
		root.dataset.theme = next;
		try {
			localStorage.setItem("theme", next);
		} catch {}
	}

	return (
		<button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode" title="Toggle dark mode">
			<span className="theme-toggle-moon">☾</span>
			<span className="theme-toggle-sun">☀</span>
		</button>
	)
}
