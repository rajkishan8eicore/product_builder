import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Column<T> = {
  header: string;
  accessor: keyof T;
};

type Props<T> = {
  columns: Column<T>[];
  data: T[];
};

function DataTable<T extends object>({ columns, data }: Props<T>) {
  return (
    <Table className="border border-gray-200 rounded-lg">
      <TableHeader className="bg-gray-400">
        <TableRow>
          {columns.map((col) => (
            <TableHead key={String(col.accessor)}>{col.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow
            className={`${rowIndex % 2 !== 0 ? "bg-green-100" : ""}`}
            key={rowIndex}
          >
            {columns.map((col) => (
              <TableCell key={String(col.accessor)}>
                {String(row[col.accessor])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;
