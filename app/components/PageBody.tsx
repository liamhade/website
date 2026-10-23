"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./PageBody.scss";
import AppBar from "./AppBar";

// The clouded-glass panel a page's content rests on, floating over the Scene.
// It's rendered once by app/(pages)/layout.tsx and persists across pages.
export default function PageBody({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const router = useRouter();
	const panel = useRef<HTMLDivElement>(null);
	const [leaving, setLeaving] = useState(false);

	// The panel scrolls rather than the window, so start each page at its top.
	useEffect(() => {
		panel.current?.scrollTo({ top: 0 });
	}, [pathname]);

	// Going home unmounts this layout at once, so play the panel's exit first and
	// only navigate when that's done (see onAnimationEnd below).
	function goHome() {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			router.push("/");
		} else {
			setLeaving(true);
		}
	}

	return (
		<div
			className={`page-body ${leaving ? "page-body--leaving" : ""}`}
			ref={panel}
			onAnimationEnd={(e) => {
				if (e.animationName === "page-body-out") router.push("/");
			}}
		>
			<AppBar onHome={goHome} />
			<div className="page-body-content">
				{children}
			</div>
		</div>
	)
}
