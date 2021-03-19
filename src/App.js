import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

//! List
import Logs from "./components/logs/Logs";
import TechListModal from "./components/techs/TechListModal";

//! Layouts
import SearchBar from "./components/layout/SearchBar";
import AddBtn from "./components/layout/addBtn";

//! Modals
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";

//! redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <div className="container">
          {/* Btn */}
          <AddBtn />

          {/* Modals */}
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />

          {/* Technician List */}
          <TechListModal />

          {/* Logs List */}
          <Logs />
        </div>
      </div>
    </Provider>
  );
};

export default App;
