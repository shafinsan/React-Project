import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./style.css";
import AllProducts from "./AllProducts";
import { decrement, increment, reset } from "./App/Slice/counterSlice";
import GetOneProductById from "./GetOneProductById";
import AddProducts from "./AddProducts";
import Update from "./Update";
import DeleteMyProduct from "./DeleteMyProduct";
function App() {
  let counter = useSelector((state) => state.count.value);
  let dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>All Product</h1>
        <p>..........................................</p>
        <AllProducts />
        <p>..........................................</p>
      </div>

      <div>
        <h1>One Product</h1>
        <p>..........................................</p>
        <GetOneProductById/>
        <p>..........................................</p>
      </div>
      <div>
        <h1>Add Product</h1>
        <p>..........................................</p>
        <AddProducts/>
        <p>..........................................</p>
      </div>

      <div>
        <h1>Update Product</h1>
        <p>..........................................</p>
        <Update/>
        <p>..........................................</p>
      </div>

      <div>
        <h1>Delete Product</h1>
        <p>..........................................</p>
        <DeleteMyProduct/>
        <p>..........................................</p>
      </div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
}

export default App;
