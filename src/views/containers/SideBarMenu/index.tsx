import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "../../../redux";
import { changeQuality, ChangeQuality } from "../../../redux/actions";
import NavMenu, { SetActiveMenuItem, vertical } from "../../components/NavMenu";

const items = [
  { name: "Call Quality", id: "call-quality" },
  { name: "SMS Quality", id: "sms-quality" },
  { name: "Email Quality", id: "email-quality" },
  { name: "Claims Quality", id: "claims-quality" }
];

interface Props {
  setActiveMenuItem: SetActiveMenuItem;
  activeItem: string;
}

function SideBarMenu(props: Props) {
  return (
    <div>
      <h4>Menu</h4>
      <NavMenu {...props} items={items} alignment={vertical} />
    </div>
  );
}

const mapStateToProps = ({ quality }: AppState) => ({ activeItem: quality });

const mapDispatchToProps = (dispatch: Dispatch<ChangeQuality>) => ({
  setActiveMenuItem: bindActionCreators(changeQuality, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarMenu);
