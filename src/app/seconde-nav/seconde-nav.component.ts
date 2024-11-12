import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seconde-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seconde-nav.component.html',
  styleUrl: './seconde-nav.component.css'
})
export class SecondeNavComponent {
  ishovered : boolean[] = [false, false , false];
  leaveTimeouts: any[] = [];

  Enter(i : number) {
    if (this.leaveTimeouts[i]) {
      clearTimeout(this.leaveTimeouts[i]);
    }
    this.ishovered[i] = true;
  }
  leave(i : number) {
    this.leaveTimeouts[i] = setTimeout(() => {
      this.ishovered[i] = false;
    }, 400);
  }

}
