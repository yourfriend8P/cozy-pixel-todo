function ItemBox({ task, toggleTask }) {
  return (
    <div
      className="task-enter w-full flex flex-row items-center"
      style={{
        padding: "16px",
        marginBottom: "16px",
        boxShadow:
          "0px 8px 6px rgba(0,0,0,0.3), inset 0px -7px 2px rgba(0,0,0,0.25)",
        backgroundColor: task.completed ? "#C9B492" : "#E8CFA7",
      }}
    >
      <button
        onClick={() => toggleTask(task.id)}
        className="shrink-0 rounded-full w-10 h-10 hover:bg-[#A27D56] flex items-center justify-center"
        style={{
          marginRight: "8px",
          backgroundColor: task.completed ? "#926454" : "#C59A6D", // green when done
        }}
      >
        {task.completed && (
          <span className="text-white font-bold text-[18px]">✓</span>
        )}
      </button>

      <div
        className="grow font-pixel text-[22px]"
        style={{
          color: "white",
          textShadow:
            "1px 1px 5px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
          letterSpacing: "1.5px",
          textDecoration: task.completed ? "line-through" : "none", // strikethrough when done
          opacity: task.completed ? 0.6 : 1,
        }}
      >
        {task.text}
      </div>
    </div>
  );
}

export default ItemBox;
