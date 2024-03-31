// delay input run function
function Debounce(callback, delay = 1000) {
   let timeout;
   return function () {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
   };
}

export default Debounce;