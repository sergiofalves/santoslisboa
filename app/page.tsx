import Papa from 'papaparse';
import EventsList from '../components/layout/cards/eventsList';
import PlacesList from '../components/layout/cards/placesList';
import TodayEvents from '../components/layout/todayEvents';
import Hero from '../components/layout/hero';
import { Divider, Stack, Typography } from '@mui/material';

function parsePortugueseDate(dateString: string): Date {
  const ptMonths: Record<string, number> = {
    'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3,
    'maio': 4, 'junho': 5, 'julho': 6, 'agosto': 7,
    'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11
  };

  const match = dateString.toLowerCase().match(/(\d+)\s+de\s+([a-zç]+)/);
  if (match) {
    const day = parseInt(match[1], 10);
    const month = ptMonths[match[2]];

    if (month !== undefined) {
      return new Date(2026, month, day);
    }
  }

  return new Date(0);
}

async function getData() {
  const data = await fetch('https://docs.google.com/spreadsheets/d/1pIPzAs4YmoHYlJvc_9-eivOI3GDvnbZT/export?format=csv&gid=421994152');
  const csvText = await data.text();

  const parsedData = Papa.parse<string[]>(csvText, {
    header: false,
    skipEmptyLines: true,
  });

  const rows = parsedData.data;
  let eventsMap = new Map<string, { artist: string, day: Date, dayPT: string }[]>();
  let allShows: { place: string, artist: string, day: Date, dayPT: string }[] = [];

  const placesRow = rows[1] || [];
  placesRow.forEach((place, colIndex) => {
    if (!place || colIndex === 0) return;

    for (let rowIndex = 3; rowIndex < rows.length; rowIndex++) {
      const row = rows[rowIndex];
      const artist = row[colIndex];

      if (artist) {
        const dayString = row[0] || "Unknown";
        if (dayString !== "Unknown" && dayString !== "Dia da Semana") {
          const parsedDate = parsePortugueseDate(dayString);

          if (!eventsMap.has(place)) {
            eventsMap.set(place, []);
          }
          eventsMap.get(place)!.push({ artist, day: parsedDate, dayPT: dayString });
          allShows.push({ place, artist, day: parsedDate, dayPT: dayString });
        }
      }
    }
  });

  return { eventsMap, allShows };
}

export default async function Home() {
  const { eventsMap, allShows } = await getData();
  const today = new Date('2026-06-12T00:00:00');//to test
  today.setHours(0, 0, 0, 0);

  const events: { place: string, shows: { artist: string, day: Date, dayPT: string }[] }[] =
    Array.from(eventsMap.entries()).map(([place, shows]) => ({ place, shows }));

  const todayEvents = allShows.filter(s => {
    const showDate = new Date(s.day);
    showDate.setHours(0, 0, 0, 0);
    const isToday = showDate.getTime() === today.getTime();
    return isToday;
  });

  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  const nextEvents = allShows.filter(s => {
    const showDate = new Date(s.day);
    showDate.setHours(0, 0, 0, 0);
    return showDate.getTime() > today.getTime() && showDate.getTime() <= nextWeek.getTime();
  });

  return (
    <>
      <main className="" style={{
        marginTop: '70px',
        paddingLeft: '10vw',
        paddingRight: '10vw',
        textAlign: 'center'
      }}>
        <Hero />
        <Stack spacing={4}>
          <Stack direction="column"
            spacing={2}
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            className='events-grid-container' >
            <Typography variant="h2">Hoje, {today.toLocaleDateString('pt-PT')}</Typography>
            <Typography variant="h3">{todayEvents.length} concertos e arraiais</Typography>
            <TodayEvents events={todayEvents} />
          </Stack>

          <Stack direction="column"
            spacing={2}
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            className='events-grid-container' >
            <Typography sx={{ alignSelf: 'start' }} variant="h2">Próximos Eventos</Typography>
            <Typography variant="h3">{nextEvents.length} concertos e arraiais nos próximos dias</Typography>
            <EventsList events={nextEvents} />
          </Stack>

          <Stack direction="column"
            spacing={2}
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
            className='events-grid-container' >
            <Typography variant="h2">Todos os Eventos</Typography>
            <PlacesList events={events} />
          </Stack>
        </Stack>
      </main >
    </>
  );

}
