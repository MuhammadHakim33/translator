import {Textarea} from "@heroui/input";

function TranslationBox({children, placeholder, isReadOnly=false, setValue, value}) {
    return (
        <div className="w-full flex min-h-[236px] relative">
            <Textarea
                classNames={{
                    input: `h-[236px] py-2 ${isReadOnly ? '' : 'pr-14'}`,
                }} 
                isReadOnly={isReadOnly}
                radius={"sm"}
                minRows={11} 
                maxRows={50} 
                placeholder={placeholder}
                onValueChange={setValue}
                value={value}
            />
            {children}
        </div>
    )
            
}

export default TranslationBox;