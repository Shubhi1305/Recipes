const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    difficulty: "Easy",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: 2,
    ingredients: "Spaghetti, egg yolks, Parmesan cheese, pancetta, garlic, black pepper, salt, olive oil.",
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a pan, cook pancetta with garlic until crispy.",
      "Whisk egg yolks with Parmesan cheese and black pepper.",
      "Toss hot spaghetti with the pancetta and remove from heat.",
      "Mix in the egg mixture, stirring quickly to create a creamy sauce."
    ],
    imgUrl: "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01-600x900.jpg"
  },
  {
    id: 2,
    name: "Chicken Biryani",
    cuisine: "Indian",
    difficulty: "Medium",
    prepTime: "30 mins",
    cookTime: "45 mins",
    servings: 4,
    ingredients: "Basmati rice, chicken, yogurt, onions, tomatoes, ginger-garlic paste, biryani spices, saffron, mint leaves, ghee.",
    instructions: [
      "Marinate chicken with yogurt, spices, and ginger-garlic paste.",
      "Cook basmati rice with saffron and set aside.",
      "Sauté onions and tomatoes, then add marinated chicken.",
      "Layer the chicken and rice in a pot and cook on low heat.",
      "Garnish with mint leaves and serve hot."
    ],
    imgUrl: "https://samirsindiankitchen.com.au/wp-content/uploads/2020/03/Chicken-Biryani.jpg"
  },
  {
    id: 3,
    name: "Sushi Rolls",
    cuisine: "Japanese",
    difficulty: "Hard",
    prepTime: "25 mins",
    cookTime: "10 mins",
    servings: 4,
    ingredients: "Sushi rice, nori sheets, raw salmon, avocado, cucumber, soy sauce, rice vinegar, sesame seeds, wasabi, pickled ginger.",
    instructions: [
      "Cook sushi rice and season with rice vinegar.",
      "Place a nori sheet on a sushi mat and spread rice evenly.",
      "Add slices of salmon, avocado, and cucumber.",
      "Roll tightly using the mat and slice into bite-sized pieces.",
      "Serve with soy sauce, wasabi, and pickled ginger."
    ],
    imgUrl: "https://peasandcrayons.com/wp-content/uploads/2016/02/homemade-sushi-rolls-bacon-avocado-salmon-sushi-recipe-PEASandCRAYONS-1384.jpg"
  },
  {
    id: 4,
    name: "Tacos al Pastor",
    cuisine: "Mexican",
    difficulty: "Medium",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 3,
    ingredients: "Corn tortillas, pork, pineapple, onions, garlic, chili powder, cumin, oregano, lime, cilantro.",
    instructions: [
      "Marinate pork with chili powder, garlic, cumin, and lime juice.",
      "Grill the pork with pineapple until caramelized.",
      "Chop the pork into small pieces.",
      "Warm corn tortillas and fill with the pork mixture.",
      "Garnish with onions, cilantro, and extra lime juice."
    ],
    imgUrl: "https://thestayathomechef.com/wp-content/uploads/2019/07/Tacos-al-Pastor-4-1.jpg"
  },
  {
    id: 5,
    name: "Pad Thai",
    cuisine: "Thai",
    difficulty: "Easy",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: 2,
    ingredients: "Rice noodles, shrimp or chicken, eggs, bean sprouts, peanuts, garlic, tamarind paste, fish sauce, sugar, green onions.",
    instructions: [
      "Soak rice noodles in warm water until soft.",
      "Stir-fry garlic, protein, and scrambled eggs in a wok.",
      "Add noodles and toss with tamarind paste, fish sauce, and sugar.",
      "Mix in bean sprouts and green onions.",
      "Garnish with peanuts and serve hot."
    ],
    imgUrl: "https://www.cookingclassy.com/wp-content/uploads/2019/03/pad-thai-1.jpg"
  }
];

export default recipes;
