import Papa from 'papaparse';

export function parsePortugueseDate(dateString: string): Date {
    const ptMonths: Record<string, number> = {
        'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3,
        'maio': 4, 'junho': 5, 'julho': 6, 'agosto': 7,
        'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11
    };
    const match = dateString.toLowerCase().match(/(\d+)\s+de\s+([a-zç]+)/);
    if (match) {
        const day = parseInt(match[1], 10);
        const month = ptMonths[match[2]];
        if (month !== undefined) return new Date(2026, month, day);
    }
    return new Date(0);
}

export async function getData() {
    const res = await fetch(
        'https://docs.google.com/spreadsheets/d/1pIPzAs4YmoHYlJvc_9-eivOI3GDvnbZT/export?format=csv&gid=421994152'
    );
    const csvText = await res.text();
    const { data: rows } = Papa.parse<string[]>(csvText, { header: false, skipEmptyLines: true });

    const allShows: { place: string; artist: string; day: Date; dayPT: string }[] = [];
    const placesRow = rows[1] || [];

    placesRow.forEach((place, colIndex) => {
        if (!place || colIndex === 0) return;
        for (let rowIndex = 3; rowIndex < rows.length; rowIndex++) {
            const row = rows[rowIndex];
            const artist = row[colIndex];
            if (artist) {
                const dayString = row[0] || 'Unknown';
                if (dayString !== 'Unknown' && dayString !== 'Dia da Semana') {
                    allShows.push({ place: place.trim(), artist: artist.trim(), day: parsePortugueseDate(dayString), dayPT: dayString });
                }
            }
        }
    });

    const dayMs = new Set(allShows.map(s => s.day.getTime()));
    const uniqueDays = Array.from(dayMs).sort((a, b) => a - b).map(ms => new Date(ms));

    return { allShows, uniqueDays };
}