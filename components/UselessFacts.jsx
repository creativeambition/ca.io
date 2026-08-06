"use client";
import { useEffect } from "react";
import { useState } from "react";

const UselessFacts = () => {
  const [fact, setFact] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((res) => res.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setFact(parsedData);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <p className={``}>
      {loading && <i className="text-gray-400">Loading...</i>}
      {fact.text && fact.text}
      {error && (
        <i className="text-gray-400">
          Oops! something went wrong
          <br />
          Check your connection and try again :)
        </i>
      )}
    </p>
  );
};

export default UselessFacts;
