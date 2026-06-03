import ToDoListBox from "../assets/vector.png";
import "../index.css";
function InputBox({ input, setInput, addTask }) {
  return (
    <div
      className="flex justify-center"
      style={{
        marginBottom: "24px",
      }}
    >
      <div
        className="bg-[#C3996D] w-180 h-20 flex justify-center items-center"
        style={{
          padding: "10px",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo...."
          className="todo-input bg-[#E8CFA7] grow h-full focus:outline-none flex-1 font-pixel text-[22px]"
          style={{
            padding: "16px",
            boxShadow:
              "0px 8px 6px rgba(0,0,0,0.3), inset 0px -7px 2px rgba(0,0,0,0.25)",
            color: "white",
            textShadow:
              "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
            letterSpacing: "1.5px",
          }}
        />
        <button
          onClick={addTask}
          className="bg-[#E8CFA7] hover:bg-[#D1BA96] text-white font-bold flex justify-cemter items-center"
          style={{
            marginLeft: "8px",
            width: "60px",
            height: "60px",
            padding: "16px",
            boxShadow:
              "0px 8px 6px rgba(0,0,0,0.3), inset 0px -7px 2px rgba(0,0,0,0.25)",
          }}
        >
          <img src={ToDoListBox} className="w-full select-none" />
        </button>
      </div>
    </div>
  );
}

export default InputBox;
