const SearchFilter = (
  searchParams: Record<string, string>,
  searchUrl: string
): URL => {
  const searchURL = new URL(searchUrl);

  Object.keys(searchParams).forEach((key) => {
    searchURL.searchParams.append(key, searchParams[key]);
  });

  return searchURL;
};

export default SearchFilter;
