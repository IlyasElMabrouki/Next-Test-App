import Item from "./components/item";

export default async function SearchPage({ params: { searchTerm } }) {
  async function getWikiResults(term) {
    const searchParams = new URLSearchParams({
      action: 'query',
      generator: 'search',
      gsrsearch: term,
      gsrlimit: '20',
      prop: 'pageimages|extracts',
      exchars: '100',
      exintro: 'true',
      explaintext: 'true',
      exlimit: 'max',
      format: 'json',
      origin: '*',
    });

    const response = await fetch(
      'https://en.wikipedia.org/w/api.php?' + searchParams
    );
    return response.json();
  }

  const data = await getWikiResults(searchTerm)
  const results = data?.query?.pages
  return (
    <main>
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageId} result={result}></Item>
        ))
      ) : (
        <h2>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
}
