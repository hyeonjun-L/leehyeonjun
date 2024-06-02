export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="prose min-h-[80dvh] max-w-none dark:prose-invert">
      {children}
    </section>
  );
}
