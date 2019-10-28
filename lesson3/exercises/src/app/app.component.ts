import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  takeOffEnabled = true;
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }

  land(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.')
    this.message = 'The shuttle has landed';
    this.color = 'green';
    this.height = 0;
    rocketImage.style.bottom = 0;
    this.takeOffEnabled = true;
  }

  abort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');

    if (result) {
      this.message = 'Mission aborted.';
      this.color = 'red';
      this.height = 0;
      rocketImage.style.bottom = 0;
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right' && this.width !== 470000) {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      if (this.width >= 460000) {
        this.color = 'orange';
      }
    }
    else if (direction === 'left' && this.width !== -20000) {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      if(this.width <= -10000) {
        this.color = 'orange';
      }
    }
    else if (direction === 'up' && this.height !== 340000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      if (this.height >= 330000) {
        this.color = 'orange';
      }

    }
    else if (direction === 'down' && this.height !== 10000) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      if (this.height < 20000) {
        this.color = 'green';
      }
    }
  }
}

