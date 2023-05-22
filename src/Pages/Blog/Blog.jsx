
const Blog = () => {
    return (
        <div className='w-2/4 mx-auto mt-10 mb-14'>
            <div >
                <h1 className='text-center text-4xl font-bold underline mb-6'> Question & Answer page</h1>
                <div className='shadow-xl'>
                    <div className=' p-10'>
                        <h2 className='text-2xl font-semibold'>1. Tell us the differences between uncontrolled and controlled components.</h2>
                        <blockquote className='ps-5 mt-4'>
                            <p>In React, components can be broadly classified into two categories: controlled components and uncontrolled components. The key difference between these two types of components is how they manage and update their state.</p>

                            <span className='text-2xl mt-4'>Controlled Components:</span>
                            <p>Controlled components are those that explicitly manage their state via props passed down from their parent component. This means that the parent component is responsible for handling and updating the state of the controlled component. Controlled components typically have an onChange handler that triggers a state update in the parent component whenever a user interacts with the component.</p>



                            <span className='text-2xl mt-4'>Uncontrolled Components:</span>
                            <p> Uncontrolled components manage their own state internally, without any intervention from the parent component. Uncontrolled components typically use refs to access the current state of the component, which can be retrieved at any time. Examples of uncontrolled components include input elements and form elements.</p>
                        </blockquote>
                    </div>
                    <div className='p-10'>
                        <h2 className='text-2xl font-semibold'>2. How to validate React props using PropTypes
                        </h2>
                        <blockquote className='ps-5 mt-4'>
                            <p>To validate React props using PropTypes, you can use the PropTypes package, which is included with React.
                                PropTypes is a library that provides a way to specify the expected types for props that are passed to a React component. It is used to ensure that the data being passed as props is of the expected type.
                                If a prop is passed to the component that does not match its expected type, a warning will be logged in the console. This can be very helpful for catching bugs early on in the development process.  important to note that PropTypes are not enforced in production mode, so  still important to handle unexpected prop types gracefully in your code.</p>

                        </blockquote>
                    </div>
                    <div className='p-10'>
                        <h2 className='text-2xl font-semibold'>3. Tell us the difference between nodejs and express js.</h2>
                        <blockquote className='ps-5 mt-4'>
                            <p>Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. It provides a platform for building server-side applications in JavaScript. Node.js is built on top of the V8 JavaScript engine used in Google Chrome and provides an event-driven, non-blocking I/O model that makes it efficient and scalable.

                            </p>

                            <span className='text-2xl mt-4'>Express js:</span>
                            <p>Express.js is a popular web framework for Node.js. It provides a set of features for building web applications and APIs in Node.js. Express.js is built on top of Node.js and provides a simpler and more convenient way to handle web requests and responses, manage routes, and work with templates and views.</p>



                            <span className='text-2xl mt-4'>Some key difference:</span>
                            <p> Node.js provides a runtime environment for running JavaScript code, whereas Express.js provides a framework for building web applications and APIs.
                                Node.js is a low-level platform, providing only basic functionality such as file system and network I/O, while Express.js adds higher-level features such as middleware, routing, and templating.
                                Node.js can be used to build a wide variety of applications, while Express.js is primarily focused on building web applications and APIs.
                                Node.js has a steeper learning curve and requires more low-level programming, while Express.js provides a simpler and more convenient way to work with HTTP requests and responses.</p>
                        </blockquote>
                    </div>
                    <div className='p-10'>
                        <h2 className='text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?
                        </h2>
                        <blockquote className='ps-5 mt-4'>
                            <p>In React, a custom hook is a reusable function that contains stateful logic and can be shared across multiple components. Custom hooks allow you to abstract away complex logic into a separate function, making it easier to reuse and maintain your code.

                                You might create a custom hook for a variety of reasons, such as:

                                Reusing code: If you find yourself writing similar logic in multiple components, you can create a custom hook to abstract away that logic and reuse it across those components.
                                Encapsulating stateful logic: Sometimes, you might have complex stateful logic that you want to encapsulate into a separate function. A custom hook allows you to do this, making your code more organized and easier to maintain.
                                Improving readability: If you have complex code that is hard to read and understand, a custom hook can help improve readability by abstracting away the complexity into a separate function with a descriptive name.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;