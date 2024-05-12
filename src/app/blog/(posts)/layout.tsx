export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="prose max-w-none dark:prose-invert">{children}</section>
  );
}
