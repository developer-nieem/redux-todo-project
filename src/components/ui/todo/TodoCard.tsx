import { Edit, Trash } from "lucide-react";
import { Button } from "../button";


const TodoCard = ({item}) => {

    return (

        
                <div className="flex justify-between items-center">
                    <input type="checkbox"  />
                    <p>{item.title}</p>
                    <p>D{item.details}</p>
                    <div className="space-x-4">
                        <Button className="bg-blue-600"> <Edit/> </Button>
                        <Button className="bg-red-700"> <Trash/> </Button>
                    </div>
                </div>
            
    );
};

export default TodoCard;