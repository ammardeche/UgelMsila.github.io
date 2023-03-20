const apiUrl = 'http://ammar-faculty.babylontech.net';
const xhr = new XMLHttpRequest();

xhr.open('GET', apiUrl);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.error('Error retrieving data from API.');
    }
  }
};
xhr.send();