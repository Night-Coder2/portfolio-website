import React from "react";

const TodoListLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <div className='w-full h-screen text-center'>
                <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodoListLayout;