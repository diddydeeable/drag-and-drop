import styles from "./Column.module.css";
import { Item } from "../../utils/types";
import { Widget } from "../Widget/Widget";
interface ColumnProps {
  title: string;
  items?: Item[];
  type: "todo" | "complete" | "in-progress";
}

function Column({ title, items,type }: ColumnProps) {
  return (
    <div className={styles.column}>
      Column
      <h2 className={styles.column}> {title}</h2>
      <div className={styles.itemList}>
        {items && items.map((item) => (
          <Widget
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
