import { Link } from "react-router";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">About Our E-Commerce Store</h1>

        <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4">
          This e-commerce application was developed as part of the MERN stack
          learning journey (Assignment-5). It demonstrates the implementation of
          various React concepts and features including:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Context API for state management</li>
          <li>Reducers for handling complex state logic</li>
          <li>Shopping cart functionality</li>
          <li>Product listing and filtering</li>
          <li>Responsive design principles</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>React.js</li>
          <li>Context API</li>
          <li>React Router</li>
          <li>Tailwind CSS</li>
        </ul>

        <div className="mt-6">
          <Link
            to="/"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
