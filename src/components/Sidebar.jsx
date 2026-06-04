import ToDoListBox from "../assets/Vector.png";
import SideBarButton from "./SideBarButton";

function Sidebar({ filter, setFilter, clearAll, clearCompleted, clearTrash }) {
  return (
    <div
      className="flex justify-center items-center"
      style={{ marginLeft: "16px" }}
    >
      <div
        className="bg-[#C3996D] w-60 h-fit flex justify-center items-center border-4 border-[#926454]"
        style={{ padding: "16px", borderRadius: "10px" }}
      >
        <div
          className="bg-[#E8CFA7] w-full h-fit flex flex-col justify-center items-center gap-5"
          style={{
            padding: "16px",
            boxShadow:
              "0 -8px 4px 0 rgba(168, 121, 89, 0.60) inset, 37px 36px 14px 0 rgba(0, 0, 0, 0.00), 23px 23px 13px 0 rgba(0, 0, 0, 0.03), 13px 13px 11px 0 rgba(0, 0, 0, 0.10), 6px 6px 8px 0 rgba(0, 0, 0, 0.17), 1px 1px 5px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <SideBarButton
            title="All"
            onClick={() => setFilter("all")}
            active={filter === "all"}
          />
          <SideBarButton
            title="Completed"
            onClick={() => setFilter("completed")}
            active={filter === "completed"}
          />
          <SideBarButton
            title="Trash"
            onClick={() => setFilter("trash")}
            active={filter === "trash"}
          />

          <SideBarButton title="Clear Completed" onClick={clearCompleted} />
          <SideBarButton
            title={filter === "trash" ? "Clear Trash" : "Clear All"}
            onClick={filter === "trash" ? clearTrash : clearAll}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
