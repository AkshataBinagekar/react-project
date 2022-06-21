import Form from "./Form";
import Header from "./header";
import Footer from "./Footer";

export default function App() {
  return (
    <div classname="App">
      <Header />
      <Form />
      <Footer year={2022} />
    </div>
  );
}
