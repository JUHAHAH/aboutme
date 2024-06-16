import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main>
        <div className="flex w-full justify-center">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
