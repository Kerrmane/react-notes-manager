import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "App";
import { StrictMode } from "react";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import {NoteBrowse} from "page/NoteBrowse/NoteBrowse";
import {Note} from "page/Note/Note";
import {NoteCreate} from "page/NoteCreate/NoteCreate";
import {PageNotFound} from "page/PageNotFound/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteBrowse/>}/>
        <Route path="/note/:id" element={<Note/>}/>
        <Route path="note/new" element={<NoteCreate/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
      
    </Provider>
  </StrictMode>
);
