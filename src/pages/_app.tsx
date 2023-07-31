import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading/Loading';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const queryClient = new QueryClient();

  useEffect(() => {
    const handleStartLoading = () => {
      setLoading(true);
    };

    const handleStopLoading = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStartLoading);
    router.events.on('routeChangeComplete', handleStopLoading);
    router.events.on('routeChangeError', handleStopLoading);

    return () => {
      router.events.off('routeChangeStart', handleStartLoading);
      router.events.off('routeChangeComplete', handleStopLoading);
      router.events.off('routeChangeError', handleStopLoading);
    };
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {loading ? <Loading /> : <Component {...pageProps} />}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
