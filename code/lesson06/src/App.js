import TopBar from "./TopBar";
import Content from "./Content";
import Footer from "./Footer";
import PokemonProfileCard from "./PokemonProfileCard";
import { Route, Switch } from "wouter";
import Sidebar from "./Sidebar";

function App() {
  const menu = [
    { text: "Home", target: "home" },
    { text: "Inbox", target: "inbox" },
    { text: "Pokedex", target: "pokedex" },
  ];

  return (
    <main className="flex flex-col w-full h-full">
      <TopBar title="My Cool App" msgCounter={3} />
      <div className="flex h-full">
        <Sidebar menu={menu} />
        <Content>
          <Switch>
            <Route path="/pokemon/:id">
              {(params) => <PokemonProfileCard id={params.id} />}
            </Route>

            <Route path="/pokedex">
              <div className="grid grid-cols-3 overflow-scroll gap-4 pb-16">
                {Array.from(Array(20)).map((_, i) => (
                  <PokemonProfileCard key={i+1} id={i+1} />
                ))}
              </div>
            </Route>
            <Route path="/inbox">Inbox</Route>
            <Route>
              <>
                Hello Visitor,
                <br />
                <br />
                nice to have you on my website.
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus et metus eros. Nulla nec velit et libero placerat
                  pulvinar in vitae dolor. Sed laoreet enim euismod volutpat
                  semper. Suspendisse pulvinar fringilla odio, porttitor
                  eleifend nulla. Suspendisse egestas mi sapien, nec semper orci
                  tempor quis. Pellentesque sodales blandit commodo. Vestibulum
                  tristique elit sit amet odio tristique blandit. Etiam rhoncus
                  ligula quis vestibulum lacinia. Sed quis augue libero. Aliquam
                  eu mauris facilisis, sagittis ligula quis, malesuada turpis.
                </p>
                <p>
                  Pellentesque lacinia lacinia velit, ac bibendum eros porttitor
                  ut. Aenean id elit a sapien finibus sodales. Quisque in
                  efficitur nisl. Aenean cursus eros sollicitudin lectus
                  suscipit condimentum. Nunc in ante eleifend, faucibus purus
                  eget, aliquet eros. Donec at nisi id ex faucibus suscipit.
                  Duis blandit magna vel nunc faucibus finibus. Nunc facilisis
                  tempor erat. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Ut molestie
                  imperdiet ligula, sit amet bibendum elit maximus et. Fusce id
                  iaculis risus. Donec mauris nulla, efficitur nec risus
                  commodo, volutpat egestas dolor. Vivamus eleifend tincidunt
                  efficitur. Proin enim ipsum, laoreet et pulvinar congue,
                  tempus nec nunc. Nam laoreet gravida eleifend.
                </p>
              </>
            </Route>
          </Switch>
        </Content>
      </div>
      <Footer copyright="by Dieter Developer (2022)" />
    </main>
  );
}

export default App;
