import { plantsAction } from "./plantsSlice";

const fetchPlantsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/plants");
      const data = await response.json();
      return data;
    };

    const plantData = await fetchData();
    //console.log(plantData)
    dispatch(plantsAction.handleGetPlants(plantData));
  };
};

export default fetchPlantsData;
