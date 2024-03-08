import { Button } from "@nextui-org/button";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDown } from "./icons";

interface menuItems {
    items: {
        key: string;
        name: string;
        url?: string;
        icon?: string;
        desc?: string;
      };
}

interface params {
  name: string;
  items: {
    key: string;
    name: string;
    url?: string;
    icon?: string;
    desc?: string;
    items?: menuItems[];
  }[];
}

export const DropdownComponent = (prop: params) => {
  const { items, name } = prop;

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          radius="sm"
          variant="light"
          endContent={icons.chevron}
        >
          {name}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={name}
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        {items.map((i) => (
          <DropdownItem key={i.key} description={i.desc} startContent={i.icon} href={i.url}>
            {i.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
