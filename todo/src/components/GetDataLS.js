const getDatafromLS = () => {
    const data = localStorage.getItem("todos");
  
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  export default getDatafromLS