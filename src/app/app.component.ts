import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ If you're using standalone components
  imports: [RouterOutlet, CommonModule, FormsModule], // ✅ Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  newWishText = '';

  title = 'wishlist';

  addNewWish() {
    // todo: add wish to items array
    // clear the textbox
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
