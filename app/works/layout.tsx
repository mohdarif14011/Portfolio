import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohd Arif",
  description: "Works || Mohd Arif",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
