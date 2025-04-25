
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ScrollArea } from "@/components/ui/scroll-area";
import MovieCard from "@/components/movies/MovieCard";
import MovieFilters from "@/components/movies/MovieFilters";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const Movies = () => {
  const [filter, setFilter] = useState("popular");

  const fetchMovies = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=1234567890&page=${pageParam}`
    );
    return response.json();
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["movies", filter],
    queryFn: fetchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white animate-neon-pulse">Movie Browser</h1>
        <MovieFilters currentFilter={filter} onFilterChange={setFilter} />
        <ScrollArea className="h-[80vh] rounded-md border border-neon/20" onScroll={handleScroll}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {status === "success" &&
              data.pages.map((page) =>
                page.results.map((movie: Movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Movies;
