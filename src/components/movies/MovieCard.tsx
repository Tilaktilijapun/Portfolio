
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movie/${movie.id}`} className="transform hover:scale-105 transition-transform duration-200">
      <Card className="overflow-hidden bg-black/60 border border-neon/20">
        <CardContent className="p-0 relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-lg font-bold text-white mb-1">{movie.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/80">{new Date(movie.release_date).getFullYear()}</span>
              <span className="text-sm text-primary">{movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
