import {Component, inject} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent {
  telegram = inject(TelegramService)

  constructor() {
    this.telegram.MainButton.show();
  }
}
