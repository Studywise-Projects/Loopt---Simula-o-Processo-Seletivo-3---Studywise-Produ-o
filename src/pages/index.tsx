import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <>
      <Button
        variant='contained'
        text='Button'
        handleClick={() => undefined}
        isAuxButton={true}
      />
      <Button variant='outlined' text='Button' handleClick={() => undefined} />
    </>
  );
}
