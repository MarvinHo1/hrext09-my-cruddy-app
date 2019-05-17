# hrext09-my-cruddy-app
Create Read Update and Delete framework using JS

 ## Tasks

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

 ### Advanced Reqs
- [ ] Item that I added goes here...


Can you eat This (fastFood Edition... :P)? (Name work in progress)


consumer
-type of diet 
-add calorie count? 
	-As you reach a certin calories count the menu item that exceeds the calorie count will not appear
-reset after a day or move onto next day with stored data?
-should track amount of nutrition taken? like carbs, protein, fats (C3 charts?)
	-record and average calories eaten in a week...
-weight vs height vs calories that can be eaten in a day...



type of diet
-should provide hyperlink to what each diet consist of?

-Atkins(keto)
-zone
-vegetarian
-pescaterian
-vegan
-weight watchers
-raw food
-mediteranean diet
-eskimo

restuarants/FastFood (will probably only work with fastfood for now)
-provide nutrition facts
-calorie for specific menu item choosen
-should only pop up depending on which diet was chosen by the consumer

places I can work with menu (basically fast food that released nutritional facts)
-McDonald
-Chic fil a
-Taco Bell
-chipotle
-in n out
-Carles Jr
-Wendy's


Meal Plan app in San Francisco campus (find out what the nutritional value and add it to our app?)





 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

 ### Advanced Reqs
- [ ] Item that I added goes here...



Store Data:
		  -I can store data by adding the menu item and nutrition facts to a single object (Key(name of menu item): (value will be an arr/obj of the nutrition))
		  for the consumer make it when they choose the diet it will only connect to a certain dataset set for the diet. ( that is only keto)
		  inside the keto diet obj I'll have to make nested obj correlating with the resturant name and also resturant menu items as key and nutrition value as value (resturant_name: Value) (could practice with recursion...........)
Capture Data: 
		  -I'll have to use javascript to iterate through the names within the obj and look for the resturant and and menu items so I can grab and display the nutritional facts. (facts will be displayed on the consumer column and food column)
		  update/delete = for this part I want to add a clear button to remove all input selection... like a refresh button  (should I include an add function(need an add button) to the consumer side so they can pick multiple food menu items and it will add up calorie count and nutrional data)
view data: 
		  -three columns that pop out side by side?
		  -should they pop out after a single click?
		  -or all at once?
		  -drop down bottons per column
		  -select what diet consumer currently pursuing
		  -fastfood joint selected. (dropDOwn for Menu item?) (or new link?) (need images.....  use crappy photos... less enticing ;))
UI/UX:
		  -First column select Diet
		  	-in the first column will be a nutritional display
		  -second column select Resturant
		  -third column select menu item once menu item has been selected nutritional facts will appear.
