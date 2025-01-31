import {Card, CardBody} from "@heroui/card";

function CardWrapper({children, ...props}) {
    return (
        <Card radius="none">
            <CardBody {...props}>
                {children}
            </CardBody>
        </Card>
    )
}

export default CardWrapper;