import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';

  addNewWish() {
    if (this.newWishText.trim()) {
      // this.items.push(new WishItem(this.newWishText.trim()));
      this.addWish.emit(new WishItem(this.newWishText));
      this.newWishText = '';
    }
  }
}
