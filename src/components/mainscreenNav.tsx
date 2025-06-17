import DropDown from "./dropdown";
import { Button } from "./ui/button";

interface MainScreenNavProps {
  pageCount?: number;
}

const MainScreenNav = (props: MainScreenNavProps) => {
  const pageCount = props.pageCount ?? 1;
  return (
    <div className="flex bg-gray-300 px-2 py-1 justify-between items-center">
      <>
        Showing 1 - {pageCount} of {pageCount}
      </>
      <div className="flex gap-2 items-center">
        <Button className="h-6 bg-transparent text-black hover:bg-transparent">
          First
        </Button>
        <div className="flex items-center">
          <Button className="h-6 bg-transparent text-black hover:bg-transparent">
            Previous
          </Button>
          <div className="mx-1">
            <DropDown name="Page 1 of 1" />
          </div>
          <Button className="h-6 bg-transparent text-black hover:bg-transparent">
            Next
          </Button>
        </div>
        <Button className="h-6 bg-transparent text-black hover:bg-transparent">
          Last
        </Button>
        <div className="flex items-center">
          <>PageSize</>
          <div className="mx-1">
            <DropDown name="10" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainScreenNav;
