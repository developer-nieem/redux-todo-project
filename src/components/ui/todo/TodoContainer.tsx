import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
    return (
        
            <div>
                <div className="flex justify-between items-center">
                <AddTodoModal/>
                <TodoFilter/>
                </div>
           
           <div className="rounded-xl border border-purple-700 p-6 space-y-4 mt-3">
           <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
           </div>
          
            </div>


          
        
    );
};

export default TodoContainer;