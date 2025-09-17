import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    setData([]);
    setErr("");
    try {
      const response = await fetch("http://localhost:8080/motorcycles");
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText || "Unknown error try again!"}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.dir("Error fetching data:", error);
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 min-h-screen container mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-xl">Motorcycle List</h1>
        <button onClick={fetchData} className="p-3 bg-blue-500 text-white">
          {isLoading ? "loading..." : "Fetch Motorcycles"}
        </button>
      </div>
      {err && <div className="text-red-500 my-5">{err}</div>}
      <ul className="grid grid-cols-1 gap-10">
        {data &&
          data.map((motorcycle) => (
            <li key={motorcycle.id} className='flex items-center gap-4 p-4 border-l border-b rounded-bl-2xl'>
              <img
                src={motorcycle.image_path}
                alt={motorcycle.name}
                className="w-32 h-auto mb-2"
              />
              <div className="grid grid-cols-1 gap-2 font-bold">
                <p>Name: <span className="font-medium">{motorcycle.name}</span>
                </p>
                <p>Engine: <span className="font-medium">{motorcycle.engine_cc}</span>
                </p>
                <p>Type: <span className="font-medium">{motorcycle.type}</span>
                </p>
              </div>
            </li>
          ))}
      </ul>
      <p className="my-5 text-center text-gray-600">
        {data.length > 0 ? `${data.length} motorcycles loaded` : "No data to show"}
      </p>
    </div>
  );
}
