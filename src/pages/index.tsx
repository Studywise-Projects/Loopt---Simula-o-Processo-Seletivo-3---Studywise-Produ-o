import SelectAutoComplete from '@/components/SelectAutoComplete/SelectAutoComplete';

export default function Home() {
  return (
    <>
      <SelectAutoComplete
        options={[
          {
            id: 1,
            label: 'Desenvolvedor Front-End',
          },
          { id: 2, label: 'Desenvolvedor Back-End' },
        ]}
        label='Vaga'
      />
    </>
  );
}
