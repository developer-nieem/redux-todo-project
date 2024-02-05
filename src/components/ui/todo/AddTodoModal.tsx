import { useState } from "react";
import { Button } from "../button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../dialog";
import { Input } from "../input";
import { Label } from "../label";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/featurs/todoSlice";

const AddTodoModal = () => {

    const [title , setTitle ] = useState('')
    const [description , setDescription ] = useState('')

    const dispatch = useAppDispatch()

    const onSubmit = (e )=> {
        e.preventDefault();

        const todoDetails  = {
            title : title,
            description : description
        }

        console.log(todoDetails);
        

        dispatch(addTodo(todoDetails))

    }


    return (
        <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-500">Add Todo</Button>
        </DialogTrigger>
        <DialogContent  className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
          <div  className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div  className="flex justify-end">
            <Button type="submit">Save changes</Button>
          </div>
          </form>
        </DialogContent>
      </Dialog>

    );
};

export default AddTodoModal;