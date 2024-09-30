import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';
const recipe = JSON.parse(recipeJSON);
var proteinName = "";
var proteinPreparation = "";
var salsaName = "";
var toppingsDisplayed =[];
var recipeName = ""

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { recipeName : recipeName, proteinName : proteinName, proteinPreparation: proteinPreparation, salsaName : salsaName, toppingsDisplayed: toppingsDisplayed});
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the received recipe object.
  //console.log(req.body["choice"]);
  switch (req.body["choice"]) {
    case "chicken":
      var chickenIngredients = recipe[0].ingredients;
      recipeName = recipe[0].name;
      proteinName = chickenIngredients.protein.name;
      proteinPreparation = chickenIngredients.protein.preparation;
      salsaName = chickenIngredients.salsa.name;
      toppingsDisplayed = chickenIngredients.toppings;
      break;
  
      case "beef":
        var beefIngredients = recipe[1].ingredients;
        recipeName = recipe[1].name;
        proteinName = beefIngredients.protein.name;
        proteinPreparation = beefIngredients.protein.preparation;
        salsaName = beefIngredients.salsa.name;
        toppingsDisplayed = beefIngredients.toppings;
        break;
        case "fish":
          var fishIngredients = recipe[2].ingredients;
          recipeName = recipe[2].name;
          proteinName = fishIngredients.protein.name;
          proteinPreparation = fishIngredients.protein.preparation;
          salsaName = fishIngredients.salsa.name;
          toppingsDisplayed = fishIngredients.toppings;
          break;
    default:
      break;
  }
  // if (req.body["choice"] === "chicken"){
  //   var chickenIngredients = recipe[0].ingredients;
  //   proteinName = chickenIngredients.protein.name;
  //   proteinPreparation = chickenIngredients.protein.preparation;
  //   salsaName = chickenIngredients.salsa.name;
  //   toppingsDisplayed = chickenIngredients.toppings;
  // }
  // else if (req.body["choice"] === "beef"){
  //   var beefIngredients = recipe[1].ingredients;
  //   proteinName = beefIngredients.protein.name;
  //   proteinPreparation = beefIngredients.protein.preparation;
  //   salsaName = beefIngredients.salsa.name;
  //   toppingsDisplayed = beefIngredients.toppings;
  // }
  // else if (req.body["choice"] === "fish"){
  //   var fishIngredients = recipe[2].ingredients;
  //   proteinName = fishIngredients.protein.name;
  //   proteinPreparation = fishIngredients.protein.preparation;
  //   salsaName = fishIngredients.salsa.name;
  //   toppingsDisplayed = fishIngredients.toppings;
  // }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
