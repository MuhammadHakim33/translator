import {Textarea} from "@heroui/react";

function TextareaInOut({action, placeholder, isReadOnly = false}) {
    return (
        <div className="w-full flex">
            <Textarea isReadOnly={isReadOnly} minRows={5} maxRows={50} placeholder={placeholder} />
            {action}
        </div>
    )
            
}

export default TextareaInOut;