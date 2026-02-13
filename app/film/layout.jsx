export default function AboutLayout({ children }) {
  return (
    <div className="bg-black min-h-screen px-3 sm:px-6 md:px-10 lg:px-20 xl:px-48 py-8 sm:py-12">
      <main>{children}</main>
    </div>
  );
}
