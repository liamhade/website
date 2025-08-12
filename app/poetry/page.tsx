"use client";
import "./page.scss";
import AppBar from "../components/AppBar";
import poems from "../data/poems.json";
import PageBody from "../components/PageBody";

export default function PoetryPage() {
	return (
		<div>
			<AppBar />
			<PageBody child={<Poems />} />
		</div>
	)
}

function Poems() {
	return (
		<div>
			{poems.map((poem, idx) => (
				<div className="poem" key={idx}>
					<div className="poem-header">
						<h2 className="poem-title">{poem.title}</h2>
						<h3 className="poem-author">By {poem.author}</h3>
					</div>
					<div className="lines">
						{poem.text.map((line: string, idy) => (
							<pre key={idy}>{line}</pre>
						))}
					</div>
				</div>
			))}
		</div>
	)
}