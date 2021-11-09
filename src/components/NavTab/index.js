import { AppBar, Tab, Tabs } from "@material-ui/core";

function NavTab({ value, onChange }) {
  return (
    <AppBar style={{ marginBottom: 20 }} position="sticky">
      <Tabs value={value} onChange={onChange} centered>
        <Tab label="Home" id="home-tab" aria-controls="home-panel" />
        <Tab label="Likes" id="like-tab" aria-controls="like-panel" />
      </Tabs>
    </AppBar>
  );
}

export default NavTab;
