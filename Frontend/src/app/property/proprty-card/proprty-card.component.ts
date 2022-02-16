import { style } from "@angular/animations";
import { Component } from "@angular/core";


@Component(
{
  selector:'app-proprty-card',
  // template:`<h1> I am a Card</h1>`,
  templateUrl:'proprty-card.component.html',
  // styles:['h1{font-wight:normal;}']
  styleUrls:['proprty-card.component.css']
}

)
export class ProprtyCardComponent{
property:any={
id:1,
"Name":"italy",
"Type":"House",
"Price":12000

}

}
