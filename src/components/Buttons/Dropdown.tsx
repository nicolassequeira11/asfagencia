import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react"

interface DropdownItemProps {
  key: string;
  label: string;
}

interface DropdownButtonProps {
  array: DropdownItemProps[];
  title: string;
  selected: string;
  onChange: (value: string) => void;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({array, title, selected, onChange}) => {
  return(
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          {title}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={array}>
        {(item:DropdownItemProps) => (
          <DropdownItem
            key={item.key}
            onClick={() => onChange(item.key)}
            color={item.key === "delete" ? "danger" : "default"}
            className={`
              ${item.key === "delete" ? "text-danger" : ""}
              ${selected ? "bg-gold-base" : ""}
            `}
            style={{ backgroundColor: selected === item.key ? "bg-gold-base" : "transparent" }}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}