# Etch-a-Sketch

[Live Page](https://blee752.github.io/Etch-a-Sketch/Index.html)

Created as a part of The Odin Project Foundations projects.

Functionality: 
    * Moving your cursor over the canvas will color the squares with black by default .
    * Randomly color canvas squares with any possible RGB values.
    * Incrementally darken a square with each pass
    * Randomly color's a canvas square with a color and darkens it with each sequential pass 

Thoughts and Takeaways: 
Initially tried creating the canvas using flex box but realized the difficulity of implementing the resizing functionality. This lead to having to refactor the code and learning CSS Grid. 

Initially going through the assignment requirements, I was fairly confused regarding the optional requirements. "Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black." I initially understood this as on a mouse hover, randomly color the square and then on each pass darken the square until it becomes black. But when I re-read this I started to think that this was actually two separate functions instead. In the end I decided to implement both as it seemed fun and a cool learning experience. The biggest challenge that came about from this was figuring out how to store the color value and darken it on each pass until it turnss black after 10 passes. This lead to the discovery of CSS variables and using that to store a calculated value that was calculated when the new color was assigned. Then on each pass, take the values stored and subtract the current RGB value with it. 

Overall, gained a lot of practice and became more familar with DOM manipuation and CSS grid. 