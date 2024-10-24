import axios from "axios";

const createTask = async (formData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BACKEND}/task/create`,
      {
        ...formData,
      },
      {
        headers: {
          "X-token": localStorage.getItem("token"),
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

const getTasks = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_BACKEND}/task/tasks`,
      {
        headers: {
          "X-token": localStorage.getItem("token"),
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

const updateTask = async (task) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_APP_BACKEND}/task/change`,
      { task },
      {
        headers: {
          "X-token": localStorage.getItem("token"),
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    return error.repsonse;
  }
};

const addPeopleToBoard = async (email) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_APP_BACKEND}/task/add-people`,
      {
        email,
      },
      {
        headers: {
          "X-token": localStorage.getItem("token"),
        },
      }
    );

    return response;
  } catch (error) {
    return error.response;
  }
};
export { createTask, getTasks, updateTask, addPeopleToBoard };
