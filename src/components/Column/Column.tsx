import styles from "./Column.module.css";
interface ColumnProps {
  title: string;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

function Column({ title, children, onDragOver, onDrop }: ColumnProps) {
  return (
    <div className={styles.column} onDragOver={onDragOver} onDrop={onDrop}>
      <h2> {title}</h2>
      {children}
    </div>
  );
}

export default Column;
