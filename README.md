<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>


  <h3 align="center">Ticket Sales- README</h3>

  <p align="center">
  A javascript project from Alura.
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

This project focused on the implementation of JavaScript logic for a concert ticket sales interface. The HTML and CSS were already provided, offering a visually structured page that displayed three different concert stages, each with a set number of available tickets. My task was to add the core interactivity and validation logic in JavaScript to ensure a seamless and realistic ticket purchasing experience for users.

The primary goal was to build a system that would dynamically handle ticket sales while maintaining data integrity and enforcing logical constraints. Each stage had a defined ticket capacity, which was displayed on the interface. I was responsible for writing the JavaScript code that would allow users to select a stage, input a quantity of tickets they wished to purchase, and update the ticket availability accordingly.

To begin, I implemented input validation to ensure that the ticket quantity entered by the user was a valid number—rejecting negative values, zero, or non-numeric entries. This prevented invalid purchases and contributed to a smoother user experience. Once a valid input was confirmed, the system then verified whether the requested number of tickets could realistically be fulfilled, given the remaining availability for the chosen stage.

If the requested quantity exceeded the number of tickets available, the system would block the transaction and optionally provide a message indicating insufficient availability. If the request was valid, the script would deduct the purchased amount from the total and immediately update the interface to reflect the new number of tickets remaining.

The purchase logic was implemented in a way that maintained consistency across different stages, ensuring that each operated independently with accurate data tracking.

Through this project, I deepened my understanding of how JavaScript can be used to manage dynamic datasets in a front-end environment, including input validation, state management. The challenge lay not only in ensuring that the application was functionally correct but also in making sure it provided intuitive, immediate feedback to the user.

More broadly, the project simulated a simplified version of real-world inventory control systems used in e-commerce and ticketing platforms. It provided me with valuable experience in applying JavaScript to enforce business rules, manage available resources, and enhance user interaction through responsive and interactive interface behavior.

<!-- CONTACT -->
## Contact

Gibran Miranda Rodrigues D'avila- gibran.davila.dev@gmail.com

