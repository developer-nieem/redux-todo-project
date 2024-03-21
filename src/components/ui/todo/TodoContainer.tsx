
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "@/redux/hook";
import { useGetTodosQuery } from "@/redux/api/api";



const TodoContainer = () => {

    const todo =  useAppSelector( state => state.todos.todos)


    const {data , isLoading , isError}  = useGetTodosQuery(undefined)
    

    if (isLoading) {
        <p>Loading........</p> 
    }

    console.log(data);

   

    return (
        
            <div>
                <div className="flex justify-between items-center">
                <AddTodoModal/>
                <TodoFilter/>
                </div>
           
           <div className="rounded-xl border border-purple-700 p-6 space-y-4 mt-3">

            {
                data?.map(item => <TodoCard item={item}/>)
            }
           
           </div>
          
            </div>

    );
};

export default TodoContainer;