Array.prototype.Mergesort = function() {
    if (this.length < 2) {
      return this;
    }

    const middle = Math.floor(this.length / 2);
    const left = this.slice(0, middle);
    const right = this.slice(middle);

    return merge(left.Mergesort(),right.Mergesort());
  }

  function merge (left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  }
