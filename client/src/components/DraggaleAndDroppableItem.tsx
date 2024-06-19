import React from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";

function DraggableDroppableItem({
  id,
  children,
  position,
}: {
  id: string;
  children: React.ReactNode;
  position: number;
}) {
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableRef,
    transform,
    active,
  } = useDraggable({
    id,
    data: { position },
  });

  const { setNodeRef: setDroppableRef } = useDroppable({
    id,
    data: { position },
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      className={`relative ${active && active.id === id ? "z-10" : "z-auto"}`}
      ref={(node) => {
        setDraggableRef(node);
        setDroppableRef(node);
      }}
      style={style}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
}

// function App() {
//   const [items, setItems] = React.useState([
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//   ]);

//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (active.id !== over.id) {
//       setItems((items) => {
//         const oldIndex = items.indexOf(active.id);
//         const newIndex = items.indexOf(over.id);

//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   };

//   return (
//     <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//       <SortableContext items={items} strategy={verticalListSortingStrategy}>
//         {items.map((id) => (
//           <DraggableDroppableItem key={id} id={id}>
//             {id}
//           </DraggableDroppableItem>
//         ))}
//       </SortableContext>
//     </DndContext>
//   );
// }

export default DraggableDroppableItem;
