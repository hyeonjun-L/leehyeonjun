export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="prose dark:prose-invert">{children}</main>;
}
