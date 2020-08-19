import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-my-component-aboutme',
  templateUrl: './my-component-aboutme.component.html',
  styleUrls: ['./my-component-aboutme.component.css'],
})
export class MyComponentAboutmeComponent implements OnInit {
  constructor(private sendContactService: ContactService) {}

  ngOnInit(): void {
    this.sendContactService.getCounter().subscribe((count) => {
      console.log('counter: ', count);
    });
  }
}
