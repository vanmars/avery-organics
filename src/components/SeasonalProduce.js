import React, { Component } from 'react';
import Month from './Month';

class SeasonalProduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableProduce: [  
        {  
           month: "January",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Turnips"
           ]
        },
        {  
           month: "February",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ]
        },
        {  
           month: "March",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ]
        },
        {  
           month: "April",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Asparagus",
              "Garlic",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Potatoes"
           ]
        },
        {  
           month: "May",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Asparagus",
              "Cauliflower",
              "Garlic",
              "Lettuce",
              "Potatoes",
              "Radishes"
           ]
        },
        {  
           month: "June",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Blackberries",
              "Cherries",
              "Raspberries",
              "Strawberries",
              "Asparagus",
              "Broccoli",
              "Cauliflower",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Potatoes",
              "Radishes",
              "Squash"
           ]
        },
        {  
           month: "July",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Rhubarb",
              "Apricots",
              "Blackberries",
              "Blueberries",
              "Cherries",
              "Melons",
              "Nectarines",
              "Peaches",
              "Raspberries",
              "Strawberries",
              "Tomatoes",
              "Beets",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "August",
           selection: [  
              "Apples",
              "Apricots",
              "Blackberries",
              "Blueberries",
              "Cherries",
              "Melons",
              "Nectarines",
              "Peaches",
              "Pears",
              "Plums",
              "Raspberries",
              "Rhubarb",
              "Strawberries",
              "Tomatoes",
              "Beets",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "September",
           selection: [  
              "Apples",
              "Blueberries",
              "Grapes",
              "Melons",
              "Peaches",
              "Pears",
              "Plums",
              "Raspberries",
              "Tomatoes",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Radishes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "October",
           selection: [  
              "Apples",
              "Grapes",
              "Hazelnuts",
              "Melons",
              "Peaches",
              "Pears",
              "Tomatoes",
              "Broccoli",
              "Brussel Sprouts",
              "Cabbage",
              "Carrots",
              "Cauliflower",
              "Corn",
              "Cucumber",
              "Eggplant",
              "Garlic",
              "Green Beans",
              "Kohlrabi",
              "Lettuce",
              "Mushrooms",
              "Onions",
              "Peas",
              "Peppers",
              "Potatoes",
              "Pumpkins",
              "Radishes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "November",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
              "Broccoli",
              "Carrots",
              "Cauliflower",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Squash",
              "Turnips"
           ]
        },
        {  
           month: "December",
           selection: [  
              "Apples",
              "Hazelnuts",
              "Pears",
             "Broccoli",
              "Carrots",
              "Cauliflower",
              "Garlic",
              "Mushrooms",
              "Onions",
              "Potatoes",
              "Turnips"
           ]
        }
      ],
      monthVisible: null
    };
  }

  handleClick = (index) => {
    if (index === 0){
      this.setState({monthVisible: "January"});
    } else if (index === 1){
      this.setState({monthVisible: "February"});
    } else if (index === 2){
      this.setState({monthVisible: "March"});
    } else if (index === 3){
      this.setState({monthVisible: "April"});
      this.monthVisible = "April";
    } else if (index === 4){
      this.setState({monthVisible: "May"});
    } else if (index === 5){
      this.setState({monthVisible: "June"});
    } else if (index === 6){
      this.setState({monthVisible: "July"});
    } else if (index === 7){
      this.setState({monthVisible: "August"});
    } else if (index === 8){
      this.setState({monthVisible: "September"});
    } else if (index === 9){
      this.setState({monthVisible: "October"});
    } else if (index === 10){
      this.setState({monthVisible: "November"});
    } else if (index === 11){
      this.setState({monthVisible: "December"});
    }
  }

  render() {
    let showMonth = null;
    if (this.state.monthVisible === "January"){
      showMonth = <Month name={this.state.availableProduce[0].month} selection={this.state.availableProduce[0].selection} key="0" />
    } else if (this.state.monthVisible === "February"){
      showMonth = <Month name={this.state.availableProduce[1].month} selection ={this.state.availableProduce[1].selection} key="1"  />
    } else if (this.state.monthVisible === "March"){
      showMonth = <Month name={this.state.availableProduce[2].month} selection ={this.state.availableProduce[2].selection} key="2"  />
    } else if (this.state.monthVisible === "April"){
      showMonth = <Month name={this.state.availableProduce[3].month} selection ={this.state.availableProduce[3].selection} key="3"  />
    } else if (this.state.monthVisible === "May"){
      showMonth = <Month name={this.state.availableProduce[4].month} selection ={this.state.availableProduce[4].selection} key="4"  />
    } else if (this.state.monthVisible === "June"){
      showMonth = <Month name={this.state.availableProduce[5].month} selection ={this.state.availableProduce[5].selection} key="5"  />
    } else if (this.state.monthVisible === "July"){
      showMonth = <Month name={this.state.availableProduce[6].month} selection ={this.state.availableProduce[6].selection} key="6"  />
    } else if (this.state.monthVisible === "August"){
      showMonth = <Month name={this.state.availableProduce[7].month} selection ={this.state.availableProduce[7].selection} key="7"  />
    } else if (this.state.monthVisible === "September"){
      showMonth = <Month name={this.state.availableProduce[8].month} selection ={this.state.availableProduce[8].selection} key="8"  />
    } else if (this.state.monthVisible === "October"){
      showMonth = <Month name={this.state.availableProduce[9].month} selection ={this.state.availableProduce[9].selection} key="9"  />
    } else if (this.state.monthVisible === "November"){
      showMonth = <Month name={this.state.availableProduce[10].month} selection ={this.state.availableProduce[10].selection} key="10"  />
    } else if (this.state.monthVisible === "December"){
      showMonth = <Month name={this.state.availableProduce[11].month} selection ={this.state.availableProduce[11].selection} key="11"  />
    } 

    return (
      <React.Fragment>
       <h3><em>Select a month to view its available produce.</em></h3>
        <div id="produce-months-div">
          {this.state.availableProduce.map((month, index) =>
            <a onClick={this.handleClick(index)} class="produce-link" key={index}>{month.month}</a>
          )}
        </div>
        <div id="produce-show-month">
          {showMonth}
        </div>
        
      </React.Fragment>
    )
  }
}

export default SeasonalProduce;