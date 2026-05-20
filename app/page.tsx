import Hero from '../components/layout/hero';
import HomeClient from '../components/layout/homeClient';
import Footer from '../components/layout/footer';
import { Stack } from '@mui/material';
import { getData } from '../utils/dataProcessing';

export default async function Home() {
  const { allShows, uniqueDays } = await getData();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let defaultIndex = uniqueDays.findIndex(d => d.getTime() >= today.getTime());
  if (defaultIndex === -1) defaultIndex = 0;

  return (
    <main>
      <Stack
        direction="column"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Hero />
        <HomeClient
          allShows={allShows}
          uniqueDays={uniqueDays}
          defaultSelectedIndex={defaultIndex}
        />
        <Footer />
      </Stack>
    </main>
  );
}
