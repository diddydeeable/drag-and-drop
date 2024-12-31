import styles from './Widget.module.css'

interface WidgetProps {
  title: string;
  description: string;
  id: number;
  type: "todo" | "complete"
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
}

export function Widget({
  title,
  description,
  id,
  onDragStart,
  onDrop,
  type
}: WidgetProps) {
    const className = `${styles.wrapper} ${styles[type]}`;
  return (
    <article
      key={id}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDrop}
      className= {className}

    >
      <div></div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </article>
  );
}
