import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { JsonPipe, CurrencyPipe, CommonModule } from "@angular/common";
import { TokhrPipe } from '../custom-pipes/tokhr-pipe';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css',
  imports: [CurrencyPipe, TokhrPipe, CommonModule, RouterLink]
})
export class Card {
  @Input() product: any;
  @Output() onAddToCard: any = new EventEmitter<any>() ;
  image = 'assets/images/card1.jpg';

  addToCard(product:any){
    this.onAddToCard.emit(product);
    console.log('log from child',product);
  }

}

