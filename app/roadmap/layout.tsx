import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RoadmapLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={`${inter.className} bg-[#06080d] text-white antialiased`}
            suppressHydrationWarning={true} // <--- Add this
        >
            {children}
        </div>
    );
}