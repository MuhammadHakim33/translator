import {Select, SelectItem} from "@heroui/react";
import {IconSelectorLine} from "@/components/icons";

function SelectLang({
    languages, 
    languageSelected, 
    setLanguageSelected, 
    languageDisable
}) {

    const handleLanguageSelected = (e) => setLanguageSelected(e.target.value);

    return (
        <Select
            radius="none"
            size="sm"
            aria-label="Select"
            disableSelectorIconRotation
            items={languages}
            classNames={{
                value:"text-center",
                popoverContent:"rounded-none",
            }}
            labelPlacement="outside"
            selectorIcon={<IconSelectorLine />}
            selectedKeys={[languageSelected]}
            onChange={handleLanguageSelected}
            disabledKeys={[languageDisable]}
        >
            {(items) => <SelectItem className="rounded-none" key={items.language}>{items.language}</SelectItem>}
        </Select>
    )
}

export default SelectLang;