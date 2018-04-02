console.log(':: start');

let d3 = require('d3');

function Parallax() {
  this.slidesContainer    = document.querySelector('.slides-container');
  this.d3SlidesContainer  = d3.select(this.slidesContainer);
  this.slides             = document.querySelectorAll('.slide');
  this.windowWidth        = window.innerWidth;
  this.easing             = false;
  // this.easingDown         = false;
  // this.easingUp           = false;
  this.transitionDuration = 1500;

  this.currentOffset = 0;
  this.diff          = 0;
  this.step          = this.windowWidth;

  this.slidesCount                 = this.slides.length;
  this.slidesWidth                 = this.slidesCount * this.windowWidth;
  this.maxOffset                   = this.slidesCount * this.windowWidth;
  this.slidesContainer.style.width = `${this.slidesWidth}px`;

  window.onwheel = (event) => {
    event.preventDefault();

    if (!this.easing) {
      if (event.deltaY < 0) {
        this.diff = this.step;
      }
      if (event.deltaY > 0) {
        this.diff = -1 * this.step;
      }

      this.currentOffset = this.currentOffset + this.diff;

      if (this.currentOffset <= 0) {
        if (this.currentOffset > (-1 * this.maxOffset)) {

          this.d3SlidesContainer
            .transition()
            .duration(this.transitionDuration)
            .ease(d3.easeQuadInOut)
            .style("left", `${this.currentOffset}px`);

        } else {
          this.currentOffset = (-1 * this.maxOffset - this.diff);
        }
      } else {
        this.currentOffset = 0;
      }

      this.easing = true;
      setTimeout(() => {
        this.easing = false
      }, this.transitionDuration * 1.2);
    }
  }
}

window.onload = () => {
  new Parallax();
}
