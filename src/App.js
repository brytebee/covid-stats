import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [statPerPage, setStatPerPage] = useState(10);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      const res = axios.get("");
    };
  }, []);
  return (
    <div className="container mt-5">
      <h1>Covid stats</h1>
      <p>This app shows a snapshot of covid stats</p>
    </div>
  );
};

export default App;
