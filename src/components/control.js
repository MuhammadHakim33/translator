"use client";

import {useState} from 'react';
import {Card, CardBody} from "@heroui/react";
import {IconArrowLeftRightLine} from "@/components/icons";
import ButtonIcon from './ButtonIcon';
import SelectLang from './SelectLang';
import language from "@/libs/language.json";

function Control() {
    const [langOrigin, setLangOrigin] = useState("Indonesian");
	const [langDestination, setLangDestination] = useState("English US");

    const handleSwapLang = () => {
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
                <ButtonIcon onPress={handleSwapLang}>
                    <IconArrowLeftRightLine className='h-4 w-4' />
                </ButtonIcon>
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