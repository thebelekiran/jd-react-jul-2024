import Menu from '@/components/Menu/Menu';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}
