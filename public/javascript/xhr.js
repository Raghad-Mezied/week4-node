const fetchXHR = (method, url, data, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const receivedData = JSON.parse(xhr.response);
        cb(null, receivedData);
      } else {
        cb(err);
        // error
      }
    } else {
      // loading
    }
  };
  xhr.open(method, url);
  xhr.send(data);
};
