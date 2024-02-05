import { ReactNode } from "react";

type TChildrenProps = {
    children : ReactNode
}


const Container = ({children} : TChildrenProps) => {
    return (
            <div className="max-w-5xl mx-auto  mt-20  p-5 space-y-4">
            {children}
        </div>
        
    );
};

export default Container;