export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="prose dark:prose-invert max-w-none">{children}</section>
  );
}
