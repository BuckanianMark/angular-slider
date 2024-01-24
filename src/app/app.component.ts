import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      imageSrc:
      "https://images.pexels.com/photos/19771953/pexels-photo-19771953/free-photo-of-field-and-rocky-hill-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imageAlt:
      "nature-1"
    },
    {
      imageSrc:
      "https://images.pexels.com/photos/18634854/pexels-photo-18634854/free-photo-of-rocky-mountains-and-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imageAlt:
      "nature-2"
    },
    {
      imageSrc:
      "https://images.pexels.com/photos/19771954/pexels-photo-19771954/free-photo-of-lake-and-rocky-hill-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imageAlt:
      "nature-3"
    },
    {
      imageSrc:
      "https://images.pexels.com/photos/19648025/pexels-photo-19648025/free-photo-of-landscape-of-green-rocky-hills.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      imageAlt:
      "nature-4"
    },
    {
      imageSrc:
      "https://images.pexels.com/photos/3892273/pexels-photo-3892273.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      imageAlt:
      "nature-5"
    },
    {
      imageSrc:
      "https://images.pexels.com/photos/17051079/pexels-photo-17051079/free-photo-of-trees-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      imageAlt:
      "nature-6"
    }
  ]
  title = 'angular-slider';
}
