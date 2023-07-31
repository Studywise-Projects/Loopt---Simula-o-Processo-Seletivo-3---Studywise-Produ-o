import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <title>Loopt - Jobs</title>
        <meta
          name='description'
          content='Site de gestão de processos seletivos da Loopt'
        />
        <meta content='text/html;charset=UTF-8' />
        <meta name='author' content='Gabriel Fernandes - Loopt' />
        <meta
          name='keywords'
          content='Loopt, gestão de vagas, jobs, vagas, sprocessos seletivos'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicon-32x32.png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
