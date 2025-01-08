import styles from './Widget.module.css'

export interface WidgetProps {
  id: number;
  title: string;
  description: string;
  column: number | null;
  position: number | null;
  status: "todo" | "inprogress" | "complete";
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

export default function Widget({
  id,
  title,
  description,
  status,
  onDragStart,
}: WidgetProps) {
    const className = `${styles.widget} ${styles[status]}`;
  return (
    <article
      key={id}
      draggable="true"
      onDragStart={onDragStart}
      className= {className}

    >
      <div></div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </article>
  );
}
