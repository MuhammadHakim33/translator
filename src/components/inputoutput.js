import {Card, CardBody} from "@heroui/react";
import {IconSendLine} from "@/components/icons";
import ButtonIcon from './buttonIcon';
import TextareaInOut from "./textareaInOut";

function InputOutput() {
    return (
        <Card>
            <CardBody className="flex-row justify-between gap-x-4">
                <TextareaInOut 
                    action={<ButtonIcon><IconSendLine className='h-4 w-4'/></ButtonIcon>} 
                    placeholder="Type to translate" 
                />
                <TextareaInOut isReadOnly={true} placeholder="Translation"/>
            </CardBody>
        </Card>
    )
}

export default InputOutput;