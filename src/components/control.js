"use client";

import {useState} from 'react';
import {Card, CardBody} from "@heroui/react";
import {Button} from "@heroui/button";
import {IconArrowLeftRightLine} from "@/components/icons";
import SelectLang from './selectLang';
import language from "@/libs/language.json";

function Control() {
    const [langOrigin, setLangOrigin] = useState("Indonesian");
	const [langDestination, setLangDestination] = useState("English US");

    const handleSwapLang = () => {
        console.log(langOrigin);
        let temp = langOrigin;
        setLangOrigin(langDestination);
		setLangDestination(temp);
    }

    return (
        <Card>
            <CardBody className="flex-row justify-between">
                <SelectLang 
                    items={language} 
                    itemSelected={langOrigin} 
                    setitemSelected={setLangOrigin}
                    disabledKeys={[langDestination]}
                />
                <Button isIconOnly aria-label="swap" onPress={handleSwapLang}>
                    <IconArrowLeftRightLine className='h-4 w-4' />
                </Button>
                <SelectLang 
                    items={language} 
                    itemSelected={langDestination} 
                    setitemSelected={setLangDestination} 
                    disabledKeys={[langOrigin]} 
                />
            </CardBody>
        </Card>
    )
}

export default Control;