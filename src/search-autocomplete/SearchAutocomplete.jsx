import React from "react";
import { useState, useEffect } from "react";
import Suggestions from "./Suggestions";
function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([])

    function handleChange(event) {
        const query = event.target.value.toLowerCase()  
        setSearchParam(query)
        if(query.length>1){
            const filteredData  = users && users.length?  
            users.filter(item => item.toLowerCase().indexOf(query) > -1)
            :[]
            setFilteredUsers(filteredData)
            setShowDropdown(true)
        }
        else {
            setShowDropdown(false)
        }
    }

  async function fetchUsers(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers("https://dummyjson.com/users");
  }, []);
 

  return (
    <div>
        {
            loading ? <h1>loading data please wait</h1>
            :  <input     name="search-users" value={searchParam} placeholder="search users " 
            onChange={handleChange}
          />
        }
      { 
        showDropdown &&<Suggestions  data ={filteredUsers}/>
      }
    
    </div>
  );
}

export default SearchAutocomplete;
