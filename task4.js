function calc() {
  let arr = [];
  for (i = 0; i < 11; i++) {
    arr.push(Math.round(Math.random() * (10 - -10) + -10));
  }

  document.getElementById("result").innerHTML = result.innerText + arr;

  document.getElementById("min").innerHTML =
    min.innerText + Math.min.apply(null, arr);

  document.getElementById("max").innerHTML =
    max.innerText + Math.max.apply(null, arr);

  document.getElementById("average").innerHTML =
    average.innerText + Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

  document.getElementById("sum").innerHTML =
    sum.innerText + arr.reduce((sum, current) => sum + current, 0);

  document.getElementById("product").innerHTML =
    product.innerText + arr.reduce((a, b) => a * b);
}
