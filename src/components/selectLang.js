import {Select, SelectItem} from "@heroui/react";
import {IconSelectorLine} from "@/components/icons";

function SelectLang({items, itemSelected, setitemSelected, ...props}) {

    const handleitemSelected = (e) => setitemSelected(e.target.value)

    return (
        <Select
            aria-label="Select"
            disableSelectorIconRotation
            items={items}
            className="max-w-xs"
            labelPlacement="outside"
            selectorIcon={<IconSelectorLine />}
            defaultSelectedKeys={[itemSelected]}
            onChange={handleitemSelected}
            {...props}
        >
            {(items) => (
                <SelectItem key={items.language}>{items.language}</SelectItem>
            )}
        </Select>
    )
}

export default SelectLang;