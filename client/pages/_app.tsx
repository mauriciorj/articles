import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default App;