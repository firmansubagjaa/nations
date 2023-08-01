import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";

export default function LayoutExplore() {
  const [countries, setCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const countriesPerPage = 10;
  const continents = ["All", "North America", "South America", "Europe", "Africa", "Asia", "Oceania"];

  useEffect(() => {
    const apiUrl = "https://restcountries.com/v3.1/all";

    const fetchUsers = async () => {
      try {
        const response = await axios.get(apiUrl);
        setCountries(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedContinent === "All") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) => country.continents.includes(selectedContinent));
      setFilteredCountries(filtered);
    }
  }, [selectedContinent, countries]);

  const pageCount = Math.ceil(filteredCountries.length / countriesPerPage);

  const handleContinentButtonClick = (continent) => {
    setSelectedContinent(continent);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * countriesPerPage;
  const currentCountries = filteredCountries.slice(offset, offset + countriesPerPage);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="my-5 font-bold text-2xl">Country List</h1>
        <motion.div initial={{ opacity: 0, y: -29 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-x-2 mb-4">
          {continents.map((continent) => {
            return (
              <motion.button
                key={continent.name}
                onClick={() => handleContinentButtonClick(continent)}
                className={`px-4 py-2 rounded-lg ${selectedContinent === continent ? "btn-primary text-white" : "bg-gray-300 text-gray-800 hover:bg-gray-400"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {continent}
              </motion.button>
            );
          })}
        </motion.div>
        <motion.ul initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-wrap justify-center mb-5">
          {currentCountries.map((country) => (
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={country.id}
              className="space-x-4 mb-7 p-10 rounded-xl shadow-sm mx-3 bg-slate-400 text-black text-center font-medium"
            >
              <img src={country.flags.svg} alt="" className="w-full max-w-xs h-full" />
              {country.name.official}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination mt-4 flex flex-wrap"}
            subContainerClassName={"pages pagination"}
            activeClassName={"bg-blue-500 text-white"}
            previousClassName={"px-3 py-2 rounded-lg mr-2 bg-gray-300 text-gray-800 hover:bg-gray-400"}
            nextClassName={"px-3 py-2 rounded-lg ml-2 bg-gray-300 text-gray-800 hover:bg-gray-400"}
            pageClassName={"px-3 py-2 rounded-lg mx-2 bg-gray-300 text-gray-800 hover:bg-gray-400"}
            breakClassName={"px-3 py-2 rounded-lg mx-3 bg-gray-300 text-gray-800 hover:bg-gray-400"}
          />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
