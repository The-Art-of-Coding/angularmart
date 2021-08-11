import { Injectable } from '@angular/core';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[]{
    return [
      {
        id:1,
        name: "Think Like a Monk: The secret of how to harness the power of positivity and be happy now",
        image_url: "/assets/images/product.jpeg",
        price: 287.00,
        rating: 5,
        description: "Jay Shetty, social media superstar and host of the #1 podcast ‘On Purpose’, distils the timeless wisdom he learned as a practising monk into practical steps anyone can take every day to live a less anxious, more meaningful life. Over the past three years, Jay Shetty has become one of the world’s most popular influencers. One of his clips was the most watched video on Facebook last year, with over 360 million views",
        available: true,
        wishListed:false,
        addedToCart: false
      },
      {
        id:2,
        name: "Life's Amazing Secrets: How to Find Balance and Purpose in Your Life",
        image_url: "/assets/images/product2.jpg",
        price: 170.00,
        rating: 4,
        description: "While navigating their way through Mumbai's horrendous traffic, Gaur Gopal Das and his wealthy young friend Harry get talking, delving into concepts ranging from the human condition to finding one's purpose in life and the key to lasting happiness.",
        available: true,
        wishListed: false,
        addedToCart: false
      },
      {
        id:3,
        name: "World’s Greatest Classics (Box Set of 4 Books)",
        image_url: "/assets/images/product3.jpg",
        price: 499.00,
        rating: 4,
        description: "Collected in this box set are some endearing and enthralling stories that have gripped the imagination of people all over the world, for decades. We bring together four timeless classics that are the greatest of all: devastating yet captivating the great Gatsby and the picture of Dorian Gray, along with passionate love stories Wuthering heights and pride & prejudice.",
        available: false,
        wishListed: false,
        addedToCart: false
      },
      {
        id:4,
        name: "My First Library: Boxset of 10 Board Books for Kids",
        image_url: "/assets/images/product4.jpg",
        price: 399.00,
        rating: 4,
        description: "A collection of 10 well-researched Board books to introduce a wide range of learning topics and everyday objects to the little scholars. The topics included in the set are - ABC, numbers, shapes, colours, wild animals, farm animals and pets, birds, fruits, vegetables and transport. These beautiful picture books develops reading skills helps the child to build a vocabulary improves listening and observational skill have well-researched bright pictures covers comprehensive set of topics suited for a toddler.",
        available: true,
        wishListed: true,
        addedToCart: false
      },
      {
        id:5,
        name: "Harry Potter and the Goblet of Fire",
        image_url: "/assets/images/product5.jpg",
        price: 454.00,
        rating: 5,
        description: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
        available: true,
        wishListed: false,
        addedToCart: false
      }
    ]
  }
}
