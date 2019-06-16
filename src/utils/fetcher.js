
const getHeader = async () => {
  const header = {
    "Content-Type": "application/json"
  };
  return header;
};

const fetchApi = async (url, method, payload, header) => {
  return fetch(url, {
    method: method,
    headers: getHeader(),
    body: payload ? JSON.stringify(payload) : null
  });
};

const call = async (url, method, payload, header) => {
  const result = await fetchApi(url, method, payload, header);
  const { status, statusText } = result;
  const contentType = "application/json";
  if (status >= 200 && status < 400) {
    const data =  await result.json();
    return { status, contentType, statusText, data };
  }
  if (status === 400) {
    const data = await result.json();
    throw {
      status,
      contentType,
      statusText,
      ...data,
      errorDetail: ""
    };
  } else {
    throw {
      status,
      contentType,
      statusText,
      errorDetail: statusText
    };
  }
};

export { call };
