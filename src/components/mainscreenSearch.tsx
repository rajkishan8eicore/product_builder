import { Button } from "./ui/button";
import { Input } from "./ui/input";

const MainScreenSearch = () => {
  return (
    <div className="bg-gray-200 flex justify-around items-center p-1">
      <div className="flex items-center gap-1">
        <h2>Search For:</h2>
        <Input className="w-25 h-8 bg-amber-100" />
      </div>
      <div className="flex items-center gap-1">
        <h2>Search Criteria:</h2>
        <Input className="w-25 h-8 bg-amber-100" />
      </div>
      <div className="flex gap-2">
        <Button className="h-6">Search</Button>
        <Button className="h-6">Refresh</Button>
      </div>
    </div>
  );
};

export default MainScreenSearch;
