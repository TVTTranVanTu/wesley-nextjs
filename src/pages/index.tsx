import { Provider } from "react-redux";
import Layout from "./layout/Layout";
import store from "../redux/store";
import Slider from "../components/slider/Slider";
import Movies from "../components/movies/Movies";
export default function Home() {
  return (
    <Provider store={store}>
      <Layout title="nextjs-demo">
        <Slider />
        <Movies />
      </Layout>
    </Provider>
  );
}
