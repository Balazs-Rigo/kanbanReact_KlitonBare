import PlusIcons from "../icons/PlusIcons"

function KanbanBoard() {
  return (
    <div className="
    m-auto
    flex
    min-h-screen
    w-full
    items-center 
    overflow-x-auto
    overflow-y-hidden
    px-[40x]">
        <div className="m-auto">
        <button onClick={() => {
            createNewColumn();
        }} className="
        h-[60px] 
        w-[350px] 
        min-w-[350px] 
        cursor-pointer 
        rounded-lg 
        bg-mainBackgroundColor 
        border-2
        border-columnBackgroundColor
        p-4
        ring-rose-500
        hover:ring-2
        flex
        gap-2
        "
        >  
        <PlusIcons/>
        Add Column</button>
        </div>
        
    </div>
  );

  function createNewColumn(){

  }
}

export default KanbanBoard