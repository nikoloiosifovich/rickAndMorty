document.querySelector("#alive").addEventListener("click", function(e) {
  window.location.href = `/character?status=${
    document.getElementById("alive").id
  }`;
});

document.querySelector("#dead").addEventListener("click", function(e) {
  window.location.href = `/character?status=${
    document.getElementById("dead").id
  }`;
});

document.querySelector("#unknown").addEventListener("click", function(e) {
  window.location.href = `/character?status=${
    document.getElementById("unknown").id
  }`;
});
