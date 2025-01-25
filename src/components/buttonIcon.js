import {Button} from "@heroui/button";

function ButtonIcon({children, ...props}) {
    return <Button isIconOnly aria-label="button" {...props}>{children}</Button>
}

export default ButtonIcon;