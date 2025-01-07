export interface Item {
  id: number;
  title: string;
  description: string;
  column: number|null;
  position: number|null;
  status: "todo"| "inprogress"|"complete";
};

