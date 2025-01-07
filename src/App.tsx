import "./App.css";
// import Column from './components/Column/Column'
import { mockData } from "./utils/data";
import { useReducer } from "react";
import { Item } from "./utils/types";
import { Widget } from "./components/Widget/Widget";
// import styles from "src/components/Column/Column.module.css";
function App() {
  //initial state
  interface widgetState {
    items: Item[]; // The list of all tasks
    draggedWidgetId: number | null; // ID of the currently dragged widget
  }

  // Define the initial state
  const initialState: widgetState = {
    items: mockData.map((task, index) => ({
      ...task,
      column: task.column ?? 0, // Default to column 0 if not already defined
      position: index, // Set the position based on the index
    })),
    draggedWidgetId: null, // Initially, no widget is being dragged
  };

  type ACTIONS =
    | { type: "SET_DRAGGED_WIDGET"; payload: number | null }
    | {
        type: "DROP_WIDGET";
        payload: {
          id: number | null;
          newColumn: number | null;
          newPosition: number | null;
        };
      };

  function reducer(state: widgetState, action: ACTIONS): widgetState {
    switch (action.type) {
      case "SET_DRAGGED_WIDGET":
        return { ...state, draggedWidgetId: action.payload };
      case "DROP_WIDGET":
        //  const { id, newColumn, newPosition} = action.payload;
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  column: action.payload.newColumn,
                  position: action.payload.newPosition,
                }
              : item
          ),
        };
      default:
        return state;
    }
  }
  //useReducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDragStart = (id: number) => {
    dispatch({ type: "SET_DRAGGED_WIDGET", payload: id });
  };

  const handleDrop = (newColumn: number) => {
    if (state.draggedWidgetId === null) return;

    dispatch({
      type: "DROP_WIDGET",
      payload: {
        id: state.draggedWidgetId,
        newColumn,
        newPosition: 0,
      },
    });

    dispatch({
      type: "DROP_WIDGET",
      payload: {
        id: null,
        newColumn: null,
        newPosition: null,
      },
    });
  };

  const columns: { id: number; status: "todo" | "inprogress" | "complete" }[] =
    [
      { id: 0, status: "todo" },
      { id: 1, status: "inprogress" },
      { id: 2, status: "complete" },
    ];
  return (
    <div className="dashboard">
      <h1>Drag and Drop Example</h1>
      <div className="grid-container">
        {columns.map((column) => (
          <div
            key={column.id}
            // className={styles.column}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(column.id)}
          >
            <h2>Column Name</h2>
            {state.items
              .filter((item) => item.column === column.id)
              .map((item) => (
                <Widget
                  id={item.id}
                  onDragStart={() => handleDragStart(item.id)}
                  title={item.title}
                  description={item.description}
                  status={column.status}
                  column={column.id}
                  position={item.position}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
