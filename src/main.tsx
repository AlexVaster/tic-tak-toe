import {App} from "./components/App/App";
import * as ReactDOMClient from "react-dom/client";

const document_elem = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(document_elem)
root.render(<App />);