
import { Button } from "@/components/ui/button";

interface MovieFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const MovieFilters = ({ currentFilter, onFilterChange }: MovieFiltersProps) => {
  const filters = [
    { id: "popular", label: "Popular" },
    { id: "top_rated", label: "Top Rated" },
    { id: "upcoming", label: "Upcoming" },
    { id: "now_playing", label: "Now Playing" },
  ];

  return (
    <div className="flex gap-4 mb-6">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={currentFilter === filter.id ? "default" : "outline"}
          onClick={() => onFilterChange(filter.id)}
          className="border-neon/20 text-white"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default MovieFilters;
