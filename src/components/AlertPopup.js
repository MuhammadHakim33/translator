import {Alert} from "@heroui/alert";

function AlertPopup({title, color, isVisible, onClose, ...props}) {
    return <Alert 
                radius="none"
                isVisible={isVisible}
                color={color} 
                title={title}
                classNames={{
                    base: "items-center max-w-xs p-2 absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    closeButton: "translate-x-0 translate-y-0"
                }}
                onClose={() => onClose(false)}
                {...props}
            />
}

export default AlertPopup;