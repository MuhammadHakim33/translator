import {Textarea} from "@heroui/input";

function TranslationBox({children, placeholder, isReadOnly = false, setValue}) {
    return (
        <div className="w-full flex min-h-[236px] relative">
            <Textarea
                classNames={{
                    input: `h-[236px] py-2 ${isReadOnly ? '' : 'pr-14'}`,
                }} 
                isClearable 
                isReadOnly={isReadOnly}
                radius={"sm"}
                minRows={11} 
                maxRows={50} 
                placeholder={placeholder}
                onValueChange={setValue}
            />
            {children}
        </div>
    )
            
}

export default TranslationBox;