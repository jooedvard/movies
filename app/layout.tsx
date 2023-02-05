import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-zinc-900">
        <nav className="text-white flex flex-row gap-5 mx-5 my-5 flex-wrap">
          <Link href={"/"}>Home</Link>
          <Link href={"/movies"}>Movies</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
