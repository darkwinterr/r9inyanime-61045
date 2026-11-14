// The video-source scraper this module relied on (github:riimuru/gogoanime)
// was removed from GitHub following a DMCA takedown, so it can no longer be
// installed. The API contract is preserved, but no video sources are returned
// until a legitimate, licensed provider is integrated here.

export interface VideoSourceResult {
  sub: {
    Referer: string;
    sources: Array<{ file: string }>;
  };
  dub: {
    Referer: string;
    sources: Array<{ file: string }>;
  };
  episodes: number | null;
}

const emptyData = (): VideoSourceResult => ({
  sub: { Referer: '', sources: [] },
  dub: { Referer: '', sources: [] },
  episodes: 0,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getAnimeSlug(_title: string, _episode: number) {
  return emptyData();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getAnime(_id: number, _episode: number) {
  return emptyData();
}
