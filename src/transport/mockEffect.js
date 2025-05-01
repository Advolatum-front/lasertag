import activities from "../stores/data/activities.json";

const sleep = () => {
  const ms = 50 + 100 * Math.random();
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const simpleRequestExample = (address) => {
  if (address === "/api/get-activities/") {
    return activities;
  }
  return null;
};

export const baseRequest = async ({ url, method = "get", data }) => {
  await sleep();
  try {
    switch (method) {
      case "get":
        return {
          data:
            simpleRequestExample(url) ||
            JSON.parse(localStorage.getItem(url) || "null"),
          status: 200,
          statusText: "OK",
        };

      case "post":
      case "put":
        localStorage.setItem(url, JSON.stringify(data));
        return {
          data,
          status: method === "post" ? 201 : 200,
          statusText: method === "post" ? "Created" : "OK",
        };

      case "delete":
        localStorage.removeItem(url);
        return {
          data: null,
          status: 204,
          statusText: "No Content",
        };

      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  } catch (error) {
    return Promise.reject({
      response: {
        status: 500,
        statusText: "Internal Server Error",
        data: { error: "LocalStorage operation failed" },
      },
    });
  }
};
