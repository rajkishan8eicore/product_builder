import DataTable from "./dataTable";
import MainScreenNav from "./mainscreenNav";
import MainScreenNewButton from "./mainscreenNewButton";
import MainScreenSearch from "./mainscreenSearch";

function MainScreen() {
  const title = "View/Manage Line of Business";
  const pageCount = 5;

  type LOB = {
    sno: number;
    name: string;
    code: number;
    date: string;
    status: string;
  };

  const users: LOB[] = [
    {
      sno: 1,
      name: "Travel",
      code: 45,
      date: "23/09/2024",
      status: "In-Active",
    },
    {
      sno: 2,
      name: "Accident",
      code: 41,
      date: "14/12/2016",
      status: "In-Active",
    },
    {
      sno: 3,
      name: "Health",
      code: 42,
      date: "14/12/2016",
      status: "Active",
    },
    {
      sno: 4,
      name: "Life",
      code: 51,
      date: "11/03/2025",
      status: "Active",
    },
    {
      sno: 5,
      name: "General",
      code: 61,
      date: "11/03/2025",
      status: "Active",
    },
  ];

  const userColumns: { header: string; accessor: keyof LOB }[] = [
    { header: "S.No", accessor: "sno" },
    { header: "LOB Name", accessor: "name" },
    { header: "LOB Code", accessor: "code" },
    { header: "Created Date", accessor: "date" },
    { header: "Status", accessor: "status" },
  ];

  return (
    <div className="flex-1 w-full p-2">
      <div className="border border-gray-300 rounded-[2px] h-full p-2">
        <h4 className="font-bold text-xl">{title}</h4>
        <div className="p-1 flex flex-col gap-1">
          <MainScreenNewButton />
          <MainScreenSearch />
          <MainScreenNav pageCount={pageCount} />
          <DataTable columns={userColumns} data={users} />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
