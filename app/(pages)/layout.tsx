import PageBody from "../components/PageBody";

// Shared by every page except home. Layouts stay mounted while you move
// between their child routes, so the glass panel stays put and only its
// content swaps, instead of the whole panel fading out and back in.
export default function PagesLayout({ children }: { children: React.ReactNode }) {
	return <PageBody>{children}</PageBody>;
}
