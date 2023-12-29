import { plantsActions } from "./plantsSlice";

const deletePlant = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/plants/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        dispatch(plantsActions.handleDeletePlant(id));
      } else {
        console.error(`Erro ao excluir planta com ID ${id}`);
      }
    } catch (error) {
      console.error("Erro na solicitação de exclusão:", error);
    }
  };
};

async function getPlants() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/plants");
    const data = await response.json();
    return data;
  };

  const plantData = await fetchData();
  return plantData;
}

export { deletePlant, getPlants };
