import { FC } from "react";

import Provider from "components/Provider/Provider";
import Container from "components/Container/Container";
import Header from "components/Header/Header";
import Panel from "components/Panel/Panel";

const App: FC = () => {
  return (
    <Provider>
      <Container>
        <Header />
        <Panel />
      </Container>
    </Provider>
  );
};

export default App;
