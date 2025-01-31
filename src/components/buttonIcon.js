import {Button} from "@heroui/button";

function ButtonIcon({children, ...props}) {
    return <Button isIconOnly variant="light" aria-label="button" {...props}>{children}</Button>
}

export default ButtonIcon;