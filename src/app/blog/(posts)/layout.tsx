export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="prose max-w-none p-3 dark:prose-invert lg:p-8">
      {children}
    </section>
  );
}
