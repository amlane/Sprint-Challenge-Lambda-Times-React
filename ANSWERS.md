1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Although now there are other ways for data type-checking, React has a lightweight feature call PropTypes. React used to include proptypes but now you must import it as a dependency and import it into the files you want to use it on. As your data comes in this is a way to check the data type being passed in as props to verify you're recieving the expected data types to catch bugs before they become a problem.

2. Describe a life-cycle event in React?

Birth/Mounting Phase: 
This is the phase where the component is built
whatever intial data is defined on the constructor of this phase
Your render method is evoked
componentDidMount gets called

Growth/Updating Phase:
shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary.
You can use setState to change the component's state data and force a render to be called again

Death/UnMounting Phase:
Your component is removed from the screen
componentWillUnmount is used during this phase and can be used for any clean up needed to be done 

3. Explain the details of a Higher Order Component?

From what I'm reading in the docs, HOCs weren't written into the language necessarily, it's a pattern that occurs due to the nature of the language. HOC are basically functions that recieves a component as an argument and return a new component. You can use HOC to share information and functionality as well as use them as a container for other components, like our withAuthenticate.js file will determine which component to render (posts page or log in screen) based on the conditions set. 

4. What are three different ways to style components in React? Explain some of the benefits of each. 

Reactstrap/bootstrap - a library allows you style things quickly and professionally but will most likely require the use of !important to override styles. 

styled-components - Styled components allows for your components and styling to be all on one page in one file which is nice when your file structure can grow quit large in a React project. It also takes away a lot of the clutter in your JSX and makes it super readable, assuming your naming convention is explicit. 

CSS/Sass/LESS - the traditional code most developers are used to seeing and reading. Also for me, I liked that my VS Code will allow me to find the perfect rbga shade of color. That feature doesn't work out of the box with styled-components but I'm sure there's probably some extension out there for it. :)