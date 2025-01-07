import styles from './Widget.module.css'

export interface WidgetProps {
  id: number;
  title: string;
  description: string;
  column: number | null;
  position: number | null;
  status: "todo" | "inprogress" | "complete";
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
}

export function Widget({
  id,
  title,
  description,
  status,
  onDragStart,
  // onDrop,
}: WidgetProps) {
    const className = `${styles.wrapper} ${styles[status]}`;
  return (
    <article
      key={id}
      draggable="true"
      onDragStart={onDragStart}
      // onDragEnd={onDrop}
      className= {className}

    >
      <div></div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </article>
  );
}
