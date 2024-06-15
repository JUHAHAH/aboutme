import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <div></div>
        <div className="flex justify-center">{children}</div>
        <div></div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
