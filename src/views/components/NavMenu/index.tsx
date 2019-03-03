import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export interface SideBarItem {
  name: string;
  id: string;
}

export type Alignment = "vertical" | "horizontal";

export const vertical: Alignment = "vertical";
export const horizontal: Alignment = "horizontal";

export type SetActiveMenuItem = (val: string) => void;

export interface Props {
  items: SideBarItem[];
  alignment?: Alignment;
  activeItem: string;
  setActiveMenuItem: SetActiveMenuItem;
}

interface State {
  activeItem: string;
}

class NavMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeItem: this.props.activeItem
    };
  }

  public handleItemClick = (_e, { name }) => {
    this.setState({ activeItem: name });
    this.props.setActiveMenuItem(name);
  };

  public render() {
    const { activeItem } = this.state;
    const { items, alignment } = this.props;
    return (
      <Menu text={true} vertical={vertical === alignment}>
        {items.map(item => (
          <Menu.Item
            name={item.name}
            key={item.id}
            active={activeItem === item.id}
            onClick={this.handleItemClick}
          />
        ))}
      </Menu>
    );
  }
}

export default NavMenu;
