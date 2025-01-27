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
            aria-label="Select"
            disableSelectorIconRotation
            items={languages}
            className="max-w-xs"
            labelPlacement="outside"
            selectorIcon={<IconSelectorLine />}
            selectedKeys={[languageSelected]}
            onChange={handleLanguageSelected}
            disabledKeys={[languageDisable]}
        >
            {(items) => <SelectItem key={items.language}>{items.language}</SelectItem>}
        </Select>
    )
}

export default SelectLang;