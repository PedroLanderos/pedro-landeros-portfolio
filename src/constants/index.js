import api from "../assets/projects/api.png";
import chat from "../assets/projects/hotel.png";
import hotel from "../assets/projects/hoootel.png";
import todoapp from "../assets/projects/todo.png";

export const HERO_CONTENT = `I am a developer dedicated to achieving excellence in every project. I am passionate about teamwork and strive to contribute my utmost in every situation, and if there's a phrase that defines me, it's 'Leaving the World a Better Place than We Found It.'`;

export const ABOUT_TEXT = `In the past year and a half, I've focused on learning software engineering, particularly understanding the most abstract concepts in computer science and algorithms, and optimizing software across platforms to reduce costs, improve efficiency, enhance scalability, and strengthen security. This results in higher ROI and a competitive edge for the company.`;

export const EXPERIENCES = [
  {
    year: "February, 2024 - July, 2024",
    role: "QA backend tester",
    company: "Grupo Carso",
    description: `I led Backend QA Testing for the Claro Drive application, overseeing an intern. I coordinated issue resolution using tools like Postman and Charles Proxy and proposed and implemented, with the help of the test team, a Node.js-based test automation system for regular API performance checks. I also tested new payment methods, ensuring their proper implementation. By collaborating with the development team and following Agile SCRUM, we increased the issue resolution rate from 60% to 90%, according to JIRA data.`,
    technologies: ["Javascript", "Postman", "Charles proxy", "JQuery", "Ajax", "Pupeetter", "JWT"],
  },
  {
    year: "January, 2023 - December, 2023",
    role: "Full Stack Developer",
    company: "Kaizen Industrial",
    description: `In collaboration with sales, I automated report generation using WPF, XAML, Entity Framework, Firebase, and JWT. I developed a .NET Core interface for client and supplier management, uploading over 300 records, and created ASP.NET APIs to periodically sync Firebase with SQL, ensuring accurate purchase and sales tracking. The system utilized binary search for price optimization, hash tables for efficient searches, and heaps for data organization, achieving constant and logarithmic search times for improved resource usage and user experience.`,
    technologies: ["C#", "ASP.NET", "Entity Framework", "SQL Server", "Firebase", "JavaScript", "HTML5", "CSS3", "XAML"],
  },
  {
    year: "2021 - Present",
    role: "Full Stack Developer",
    company: "Freelancer",
    description: `Developed web applications using ASP.NET, JavaScript, and Spring MVC. Additionally, I designed and implemented administration systems leveraging WPF and Windows Forms with C#, Entity Framework, .NET Core, SQL Server, MySQL, and NoSQL databases. Furthermore, I created applications such as a data compression tool and a to-do app, employing advanced algorithms and data structures.`,
    technologies: ["C#", "JavaScript", "Java", "C", "C++", "Python","SQL", "HTML", "CSS", "Entity Framework", "ASP.NET", "DOTNET CORE", "WPF", "MVC"],
  },
];

export const PROJECTS = [
  {
    title: "Hotel Manager",
    image: hotel,
    link: "https://github.com/PedroLanderos/HotelManager",
    description:
      "A hotel chain simulator optimized to maintain logarithmic, linear, and constant time complexities, developed using Entity Framework, Windows Forms, and a NoSQL Cassandra database.",
    technologies: ["C#", ".NET", "Entity Framework", "NoSQL Cassandra", "Windows Forms", "XML", "Json"],
  },
  {
    title: "Chat app",
    image: chat,
    link: "https://github.com/PedroLanderos/ChatGroup",
    description:
      "A real-time group chat implemented with SignalR, ASP.NET for the backend, and Angular 18 for the frontend.",
    technologies: ["ASP.NET", "Angular", "TypeScript", "SignalR", "CSS", "HTTP", "JavaScript", "HTML"],
  },
  {
    title: "Users management API",
    image: api,
    link: "https://github.com/PedroLanderos/usersAPI",
    description:
      "Development of a REST API with .NET Core, featuring controllers for user management and data storage using Entity Framework. For querying, React was utilized with a focus on Hooks.",
    technologies: ["ASP.NET", "API RESTFul","Entity Framework", "SQL SERVER", "React", "JavaScript", "Hooks", "CSS", "HTML", "Json", "Postman"],
  },
  {
    title: "To do app",
    image: todoapp,
    link: "https://github.com/PedroLanderos/ToDoAPP",
    description:
      "An optimized to-do app created with a balanced tree data structure to store pending activities, ensuring constant and logarithmic time complexities, resulting in faster performance than average.",
    technologies: ["C#", "Binary Trees", "Data Structures", "Heap", "Binary Search", "Stack", "Priority Queue"],
  },
];

export const CONTACT = {
  phoneNo: "+52 5546986467 ",
  email: "developerpjlc@gmail.com",
};
