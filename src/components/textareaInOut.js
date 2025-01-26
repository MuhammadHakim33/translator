import {Textarea} from "@heroui/react";

function TextareaInOut({placeholder, isReadOnly = false, setValue}) {
    return (
        <div className="w-full flex">
            <Textarea 
                isReadOnly={isReadOnly} 
                minRows={5} 
                maxRows={50} 
                placeholder={placeholder}
                onValueChange={setValue} 
            />
        </div>
    )
            
}

export default TextareaInOut;